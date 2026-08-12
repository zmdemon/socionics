<script setup lang="ts">
import { functionPositions, informationElements, socionicTypes } from '~~/shared/data/socionics'

usePageSeo(
  'Таблица функций социотипов',
  'Сравнительная таблица первых четырёх функций модели А для всех 16 социотипов с расшифровкой обозначений ЧИ, БИ, ЧС, БС, ЧЛ, БЛ, ЧЭ и БЭ.'
)
</script>

<template>
  <main>
    <section class="page-intro page-intro--table">
      <UContainer>
        <div class="page-intro__grid">
          <div>
            <p class="section-kicker">Модель А</p>
            <h1>Функции всех типов</h1>
          </div>
          <p>
            Читайте по столбцу, чтобы увидеть модель конкретного типа, или по строке,
            чтобы сравнить одну позицию сразу у всех 16 типов.
          </p>
        </div>
        <div class="table-tip">
          <span aria-hidden="true">↔</span>
          <p>Таблица прокручивается по горизонтали. Первый столбец остаётся на месте.</p>
        </div>
      </UContainer>
    </section>

    <section class="matrix-section">
      <UContainer class="matrix-container">
        <div class="matrix-frame" tabindex="0" aria-label="Таблица первых четырёх функций всех социотипов">
          <table class="functions-table">
            <thead>
              <tr>
                <th scope="col" class="position-column">
                  <span>Позиция</span>
                  <small>модель А</small>
                </th>
                <th v-for="type in socionicTypes" :key="type.code" scope="col">
                  <strong>{{ type.code }}</strong>
                  <small>{{ type.alias }}</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(position, positionIndex) in functionPositions" :key="position.number">
                <th scope="row" class="position-column">
                  <span class="position-number">0{{ position.number }}</span>
                  <strong>{{ position.name }}</strong>
                  <small>{{ position.description }}</small>
                </th>
                <td v-for="type in socionicTypes" :key="`${type.code}-${position.number}`">
                  <ElementPill :code="type.functions[positionIndex]!" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </UContainer>
    </section>

    <section id="legend" class="legend-section">
      <UContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p class="section-kicker">Легенда</p>
            <h2>Восемь элементов</h2>
          </div>
          <p>«Чёрный» означает экстравертную установку элемента, «белый» — интровертную.</p>
        </div>

        <div class="legend-grid">
          <UCard v-for="element in informationElements" :key="element.code" class="legend-card">
            <div class="legend-code">{{ element.code }}</div>
            <div>
              <h3>{{ element.name }}</h3>
              <p>{{ element.shortName }}</p>
            </div>
          </UCard>
        </div>

        <div class="source-note">
          <strong>О терминологии</strong>
          <p>
            В таблице используются распространённые русские сокращения элементов модели А.
            Показаны четыре функции ментального кольца: базовая, творческая, ролевая и болевая.
          </p>
        </div>
      </UContainer>
    </section>
  </main>
</template>
