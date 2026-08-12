<script setup lang="ts">
import type { SocionicType } from '~~/shared/data/socionics'

defineProps<{
  type: SocionicType
}>()
</script>

<template>
  <UCard class="type-card" :ui="{ body: 'p-0 sm:p-0', header: 'p-0 sm:p-0' }">
    <template #header>
      <div class="type-card__header">
        <span class="type-card__code">{{ type.code }}</span>
        <UBadge color="neutral" variant="subtle" size="sm">
          {{ type.quadra }} квадра
        </UBadge>
      </div>
    </template>

    <div class="type-card__body">
      <div>
        <h3>{{ type.name }}</h3>
        <p>{{ type.alias }}</p>
      </div>
      <div class="type-card__ego" aria-label="Базовая и творческая функции">
        <ElementPill :code="type.functions[0]" />
        <span class="ego-separator" aria-hidden="true">+</span>
        <ElementPill :code="type.functions[1]" />
      </div>
    </div>
  </UCard>
</template>
