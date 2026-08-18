<script setup lang="ts">
import type { ElementCode } from '~~/shared/data/socionics'
import { informationElements } from '~~/shared/data/socionics'

const props = defineProps<{
  code: ElementCode
  compact?: boolean
  symbol?: boolean
  interactive?: boolean
  ariaLabel?: string
}>()

const element = computed(() => informationElements[props.code])
</script>

<template>
  <component
    :is="interactive ? 'button' : 'span'"
    :type="interactive ? 'button' : undefined"
    class="element-pill"
    :class="{
      'element-pill--compact': compact,
      'element-pill--interactive': interactive
    }"
    :aria-label="ariaLabel ?? `${element.code}: ${element.name}`"
  >
    <SocionicsSymbol v-if="symbol" :code="code" />
    <span v-if="compact || !symbol" class="element-code" aria-hidden="true">{{ element.code }}</span>
    <span v-if="!compact" class="element-name">{{ element.name }}</span>
  </component>
</template>
