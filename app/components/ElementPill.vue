<script setup lang="ts">
import type { ElementCode } from '~~/shared/data/socionics'
import { informationElements } from '~~/shared/data/socionics'

const props = defineProps<{
  code: ElementCode
  compact?: boolean
}>()

const element = computed(() => informationElements[props.code])
</script>

<template>
  <span class="element-pill" :class="{ 'element-pill--compact': compact }">
    <span class="element-code">{{ element.code }}</span>
    <span v-if="!compact" class="element-name">{{ element.name }}</span>
  </span>
</template>
