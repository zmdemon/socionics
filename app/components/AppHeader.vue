<script setup lang="ts">
const route = useRoute()

const navigation = [
  { label: 'Обзор', to: '/' },
  { label: 'Социотипы', to: '/types' },
  { label: 'Таблица', to: '/functions' },
  { label: 'Статьи', to: '/articles' },
  { label: 'О проекте', to: '/about' }
]

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header class="site-header">
    <UContainer class="header-inner">
      <NuxtLink to="/" class="brand" aria-label="Соционика — на главную">
        <span class="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </span>
        <span class="brand-name">Соционика</span>
      </NuxtLink>

      <nav class="header-tabs" aria-label="Основная навигация">
        <UButton
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :label="item.label"
          color="neutral"
          variant="ghost"
          size="sm"
          :class="['header-tab', { 'header-tab--active': isActive(item.to) }]"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        />
      </nav>
    </UContainer>
  </header>
</template>
