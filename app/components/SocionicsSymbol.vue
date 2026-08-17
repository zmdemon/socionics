<script setup lang="ts">
import type { ElementCode } from '~~/shared/data/socionics'

const props = withDefaults(defineProps<{
  code: ElementCode
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md'
})

const shapeByCode: Record<ElementCode, 'triangle' | 'circle' | 'square' | 'ethics'> = {
  'ЧИ': 'triangle',
  'БИ': 'triangle',
  'ЧС': 'circle',
  'БС': 'circle',
  'ЧЛ': 'square',
  'БЛ': 'square',
  'ЧЭ': 'ethics',
  'БЭ': 'ethics'
}

const shape = computed(() => shapeByCode[props.code])
const fill = computed(() => props.code.startsWith('Ч') ? 'filled' : 'outline')
</script>

<template>
  <span
    class="socionics-symbol"
    :class="[
      `socionics-symbol--${size}`,
      `socionics-symbol--${fill}`
    ]"
    aria-hidden="true"
  >
    <span class="socionics-symbol__shape" :class="`socionics-symbol__shape--${shape}`" />
  </span>
</template>

<style scoped>
.socionics-symbol {
  --symbol-ink: #4a4a47;
  --symbol-surface: #f7f7f4;

  flex: 0 0 auto;
  display: inline-grid;
  place-items: center;
  border: 1px solid #d1d1cc;
  border-radius: 0.5rem;
  background: var(--symbol-surface);
}

.socionics-symbol--sm {
  width: 1.7rem;
  height: 1.7rem;
}

.socionics-symbol--md {
  width: 2rem;
  height: 2rem;
}

.socionics-symbol--lg {
  width: 2.65rem;
  height: 2.65rem;
}

.socionics-symbol__shape {
  position: relative;
  display: block;
  width: 1.1rem;
  height: 1.1rem;
  background: var(--symbol-ink);
}

.socionics-symbol--sm .socionics-symbol__shape {
  width: 0.9rem;
  height: 0.9rem;
}

.socionics-symbol--lg .socionics-symbol__shape {
  width: 1.35rem;
  height: 1.35rem;
}

.socionics-symbol__shape--triangle {
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.socionics-symbol__shape--circle {
  border-radius: 50%;
}

.socionics-symbol__shape--ethics {
  clip-path: polygon(0 0, 58% 0, 58% 42%, 100% 42%, 100% 100%, 0 100%);
}

.socionics-symbol--outline .socionics-symbol__shape::after {
  position: absolute;
  content: '';
  background: var(--symbol-surface);
}

.socionics-symbol--outline .socionics-symbol__shape--triangle::after {
  inset: 0.2rem 0.18rem 0.12rem;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.socionics-symbol--outline .socionics-symbol__shape--circle::after,
.socionics-symbol--outline .socionics-symbol__shape--square::after {
  inset: 0.16rem;
}

.socionics-symbol--outline .socionics-symbol__shape--circle::after {
  border-radius: 50%;
}

.socionics-symbol--outline .socionics-symbol__shape--ethics::after {
  inset: 0.16rem;
  clip-path: polygon(0 0, 51% 0, 51% 49%, 100% 49%, 100% 100%, 0 100%);
}
</style>
