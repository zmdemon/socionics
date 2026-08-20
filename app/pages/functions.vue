<script setup lang="ts">
import type { FunctionElementDetail } from '~~/shared/data/socionics'
import {
  functionPositions,
  getFunctionElementDetail,
  informationElements,
  socionicTypes
} from '~~/shared/data/socionics'

usePageSeo(
  'Таблица функций социотипов',
  'Сравнительная таблица всех восьми функций модели А для 16 социотипов с графическими знаками информационных элементов и их расшифровкой.'
)

const isPositionColumnCompact = ref(true)
const isFunctionDetailOpen = ref(false)
const selectedFunctionDetail = ref<FunctionElementDetail | null>(null)

const matrixRows = functionPositions.map((position, positionIndex) => ({
  position,
  cells: socionicTypes.map((type) => {
    const elementCode = type.functions[positionIndex]!

    return {
      type,
      elementCode,
      detail: getFunctionElementDetail(position.number, elementCode)
    }
  })
}))

function togglePositionColumn() {
  isPositionColumnCompact.value = !isPositionColumnCompact.value
}

function openFunctionDetail(detail: FunctionElementDetail) {
  selectedFunctionDetail.value = detail
  isFunctionDetailOpen.value = true
}

function clearFunctionDetail() {
  selectedFunctionDetail.value = null
}
</script>

<template>
  <main>
    <section class="page-intro page-intro--table">
      <UContainer>
        <div class="page-intro__grid">
          <div>
            <p class="section-kicker">Раскладка по номерам</p>
            <h1>Таблица функций</h1>
          </div>
          <p>
            Столбец. Строка.
          </p>
        </div>
        <div class="table-tip">
          <p>
            Таблица. Некоторые ичейки кликабельные.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="matrix-section">
      <UContainer class="matrix-container">
        <div
          class="matrix-frame"
          :class="{ 'matrix-frame--compact': isPositionColumnCompact }"
          tabindex="0"
          aria-label="Таблица всех восьми функций социотипов"
        >
          <table class="functions-table">
            <thead>
              <tr>
                <th scope="col" class="position-column">
                  <div class="position-heading">
                    <div class="position-heading__copy">
                      <span>Позиция</span>
                      <small>модель А</small>
                    </div>
                    <UButton
                      class="position-toggle"
                      color="neutral"
                      variant="ghost"
                      square
                      :aria-label="isPositionColumnCompact ? 'Развернуть столбец позиций' : 'Сжать столбец позиций'"
                      :aria-pressed="isPositionColumnCompact"
                      :title="isPositionColumnCompact ? 'Развернуть столбец' : 'Сжать столбец'"
                      @click="togglePositionColumn"
                    >
                      <svg
                        class="position-toggle__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 3v18" />
                        <path v-if="isPositionColumnCompact" d="m14 9 3 3-3 3" />
                        <path v-else d="m16 15-3-3 3-3" />
                      </svg>
                    </UButton>
                  </div>
                </th>
                <th v-for="type in socionicTypes" :key="type.code" scope="col">
                  <strong>{{ type.code }}</strong>
                  <small>{{ type.alias }}</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in matrixRows" :key="row.position.number">
                <th scope="row" class="position-column">
                  <span class="position-number">0{{ row.position.number }}</span>
                  <strong>
                    <span class="position-name-full">{{ row.position.name }}</span>
                    <span class="position-name-compact">{{ row.position.compactName }}</span>
                  </strong>
                  <small class="position-description">{{ row.position.description }}</small>
                </th>
                <td
                  v-for="cell in row.cells"
                  :key="`${cell.type.code}-${row.position.number}`"
                >
                  <ElementPill
                    v-if="cell.detail"
                    :code="cell.elementCode"
                    symbol
                    compact
                    interactive
                    :aria-label="`Открыть описание «${cell.detail.title}» для типа ${cell.type.code} — ${cell.type.alias}`"
                    @click="openFunctionDetail(cell.detail)"
                  />
                  <ElementPill v-else :code="cell.elementCode" symbol compact />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UContainer>
    </section>

    <UModal
      v-model:open="isFunctionDetailOpen"
      :title="selectedFunctionDetail?.title"
      :description="selectedFunctionDetail?.description"
      :ui="{
        overlay: 'function-detail-overlay',
        content: 'function-detail-modal',
        header: 'function-detail-modal__header',
        body: 'function-detail-modal__body'
      }"
      @after:leave="clearFunctionDetail"
    >
      <template #close>
        <UButton
          class="function-detail-modal__close"
          color="neutral"
          variant="ghost"
          square
          aria-label="Закрыть"
        >
          <svg
            class="function-detail-modal__close-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </UButton>
      </template>

      <template #body>
        <div v-if="selectedFunctionDetail" class="function-detail-copy">
          <p v-for="paragraph in selectedFunctionDetail.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </template>
    </UModal>

    <section id="legend" class="legend-section">
      <UContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p class="section-kicker">Легенда</p>
            <h2>Восемь элементов</h2>
          </div>
          <p>Заполненный знак обозначает экстравертированный аспект, контурный — интровертированный.</p>
        </div>

        <div class="legend-grid">
          <UCard v-for="element in informationElements" :key="element.code" class="legend-card">
            <div class="legend-code">
              <SocionicsSymbol :code="element.code" size="lg" />
              <span>{{ element.code }}</span>
            </div>
            <div>
              <h3>{{ element.shortName }}</h3>
              <p>{{ element.description }}</p>
            </div>
          </UCard>
        </div>

        <div class="source-note">
          <strong>О терминологии</strong>
          <p>
            Каждая функция обрабатывает один аспект. Позиции 3, 4, 1 и 2 образуют ментальное кольцо,
            позиции 5, 6, 7 и 8 — витальное. Ментальное кольцо осознаётся лучше, витальное — слабее.
            Буквенные сокращения сохранены в легенде для расшифровки.
          </p>
        </div>
      </UContainer>
    </section>
  </main>
</template>
