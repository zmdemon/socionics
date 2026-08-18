<script setup lang="ts">
import { informationElements } from '~~/shared/data/socionics'

usePageSeo(
  'Соционика',
  'Наглядный русскоязычный справочник по соционике: 16 типов, восемь информационных элементов и модель А.'
)

const elementCodes = Object.keys(informationElements) as Array<keyof typeof informationElements>
</script>

<template>
  <main>
    <section class="hero-section">
      <UContainer>
        <div class="hero-grid">
          <div class="hero-copy">
            <UBadge color="neutral" variant="subtle" size="lg" class="eyebrow-badge">
              Визуальный справочник
            </UBadge>
            <h1>Разобраться в структуре соционики</h1>
            <p class="hero-lead">
              Соционика — типологическая концепция о 16 типах информационного метаболизма.
              Она описывает различия в том, как человек получает, обрабатывает и выдаёт информацию.
            </p>
            <div class="hero-actions">
              <UButton to="/functions" label="Открыть таблицу функций" color="neutral" size="lg" />
              <UButton to="/types" label="Посмотреть социотипы" color="neutral" variant="outline" size="lg" />
            </div>
          </div>

          <div class="hero-model" aria-label="Схема из восьми информационных элементов">
            <div class="model-caption">
              <span>Модель А</span>
              <span>8 элементов</span>
            </div>
            <div class="model-grid">
              <div v-for="(code, index) in elementCodes" :key="code" class="model-cell">
                <span class="model-index">0{{ index + 1 }}</span>
                <strong>{{ code }}</strong>
                <small>{{ informationElements[code].shortName }}</small>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="stats-strip" aria-label="Ключевые числа соционики">
      <UContainer class="stats-grid">
        <div>
          <strong>16</strong>
          <span>социотипов</span>
        </div>
        <div>
          <strong>8</strong>
          <span>информационных элементов</span>
        </div>
        <div>
          <strong>4</strong>
          <span>квадры</span>
        </div>
        <div>
          <strong>1</strong>
          <span>сравнительная система</span>
        </div>
      </UContainer>
    </section>

    <section class="content-section">
      <UContainer>
        <div class="section-heading section-heading--split">
          <div>
            <p class="section-kicker">Начните с главного</p>
            <h2>Три слоя одной типологии</h2>
          </div>
          <p>
            Социотип задаёт конфигурацию функций модели А. Аспект — это вид информации.
            Функция определяет, как информация этого аспекта воспринимается и обрабатывается.
          </p>
        </div>

        <div class="feature-grid">
          <UCard class="feature-card">
            <span class="feature-number">01</span>
            <h3>Социотипы</h3>
            <p>Все 16 типов с полными названиями, псевдонимами, квадрами и блоком Эго — базовой и творческой функциями.</p>
            <UButton to="/types" label="Перейти к типам" color="neutral" variant="link" class="feature-link" />
          </UCard>
          <UCard class="feature-card feature-card--dark">
            <span class="feature-number">02</span>
            <h3>Функции</h3>
            <p>Единая матрица с типами по столбцам и позициями модели А по строкам.</p>
            <UButton to="/functions" label="Открыть матрицу" color="neutral" variant="soft" class="feature-link" />
          </UCard>
          <UCard class="feature-card">
            <span class="feature-number">03</span>
            <h3>Термины</h3>
            <p>Расшифровка ЧИ, БИ, ЧС, БС, ЧЛ, БЛ, ЧЭ и БЭ без необходимости держать всё в памяти.</p>
            <UButton to="/functions#legend" label="Смотреть обозначения" color="neutral" variant="link" class="feature-link" />
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="note-section">
      <UContainer>
        <div class="note-card">
          <p class="section-kicker">Важно помнить</p>
          <h2>Типология — язык описания</h2>
          <p>
            В академической психологии у соционики отсутствует статус общепринятого научного диагностического метода.
            Используйте её как концептуальную модель для наблюдения, изучения терминов и разговора о типологии.
          </p>
          <UButton to="/about" label="О принципах проекта" color="neutral" variant="outline" />
        </div>
      </UContainer>
    </section>
  </main>
</template>
