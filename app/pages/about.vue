<script setup lang="ts">
usePageSeo(
  'О проекте',
  'Принципы образовательного справочника Соционика, границы интерпретации соционики и устройство материалов.'
)
</script>

<template>
  <main>
    <section class="page-intro about-intro">
      <UContainer>
        <div class="about-title">
          <p class="section-kicker">О проекте</p>
          <h1>Тут может быть информация о проекте</h1>

        </div>
      </UContainer>
    </section>

    <section class="about-content">
      <UContainer>
        <div class="about-statement">
          <div>
            <p class="section-kicker">Как пользоваться</p>
            <h2>Изучайте.</h2>
          </div>
          <div class="about-statement__copy">
            <p>
              Начните с таблицы функций: найдите нужный тип.
            </p>
            <UButton to="/functions" label="Перейти к таблице" color="neutral" size="lg" />
          </div>
        </div>
      </UContainer>
    </section>
  </main>
</template>
