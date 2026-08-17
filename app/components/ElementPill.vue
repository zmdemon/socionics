<script setup lang="ts">
import type { ElementCode } from '~~/shared/data/socionics'
import { informationElements } from '~~/shared/data/socionics'

const props = defineProps<{
  code: ElementCode
  compact?: boolean
  symbol?: boolean
}>()

const element = computed(() => informationElements[props.code])
</script>

<template>
  <span
    class="element-pill"
    :class="{ 'element-pill--compact': compact }"
    :aria-label="`${element.code}: ${element.name}`"
  >
    <SocionicsSymbol v-if="symbol" :code="code" />
    <span v-if="compact || !symbol" class="element-code" aria-hidden="true">{{ element.code }}</span>
    <span v-if="!compact" class="element-name">{{ element.name }}</span>
  </span>
</template>
