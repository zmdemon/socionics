<script setup lang="ts">
import { quadras, socionicTypes } from '~~/shared/data/socionics'

usePageSeo(
  '16 социотипов',
  'Каталог всех 16 соционических типов: названия, псевдонимы, квадры, базовые и творческие функции.'
)

const query = ref('')

const normalizedQuery = computed(() => query.value.trim().toLocaleLowerCase('ru'))

const visibleTypes = computed(() => {
  if (!normalizedQuery.value) return socionicTypes

  return socionicTypes.filter((type) =>
    [type.code, type.name, type.alias, type.quadra]
      .some(value => value.toLocaleLowerCase('ru').includes(normalizedQuery.value))
  )
})

function typesByQuadra(quadra: typeof quadras[number]) {
  return visibleTypes.value.filter(type => type.quadra === quadra)
}
</script>

<template>
  <main>
    <section class="page-intro">
      <UContainer>
        <div class="page-intro__grid">
          <div>
            <p class="section-kicker">Каталог</p>
            <h1>16 социотипов</h1>
          </div>
          <p>
            Тип информационного метаболизма задаётся порядком элементов в модели А.
            Типы собраны по квадрам. На карточках показан их блок Эго.
          </p>
        </div>

        <div class="catalog-toolbar">
          <UInput
            v-model="query"
            color="neutral"
            variant="outline"
            size="xl"
            placeholder="Найти тип по коду или названию"
            aria-label="Поиск по социотипам"
            class="type-search"
          />
          <span>{{ visibleTypes.length }} из 16 типов</span>
        </div>
      </UContainer>
    </section>

    <section class="catalog-section">
      <UContainer>
        <template v-for="(quadra, quadraIndex) in quadras" :key="quadra">
          <div v-if="typesByQuadra(quadra).length" class="quadra-section">
            <div class="quadra-heading">
              <span>0{{ quadraIndex + 1 }}</span>
              <h2>{{ quadra }}</h2>
              <p>квадра</p>
            </div>
            <div class="types-grid">
              <TypeCard v-for="type in typesByQuadra(quadra)" :key="type.code" :type="type" />
            </div>
          </div>
        </template>

        <UCard v-if="visibleTypes.length === 0" class="empty-state">
          <h2>Ничего не найдено</h2>
          <p>Попробуйте поиск по коду «ЛИИ», псевдониму «Гексли», названию квадры.</p>
          <UButton label="Очистить поиск" color="neutral" variant="outline" @click="query = ''" />
        </UCard>
      </UContainer>
    </section>
  </main>
</template>
