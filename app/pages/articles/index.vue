<script setup lang="ts">
import { articles } from '~~/shared/data/articles'

usePageSeo(
  'Статьи',
  'Раздел «Статьи».'
)
</script>

<template>
  <main>
    <section class="page-intro articles-intro">
      <UContainer>
        <h1>Статьи</h1>
      </UContainer>
    </section>

    <section class="articles-section">
      <UContainer>
        <div class="articles-list">
          <UCard v-for="article in articles" :key="article.slug" class="article-card">
            <div
              :class="[
                'article-card__layout',
                {
                  'article-card__layout--without-image': !article.image && !article.imagePlaceholder
                }
              ]"
            >
              <picture
                v-if="article.image"
                class="article-card__picture"
              >
                <source
                  v-if="article.image.avifSrc"
                  :srcset="article.image.avifSrc"
                  type="image/avif"
                >
                <img
                  :src="article.image.src"
                  :alt="article.image.alt"
                  class="article-card__image"
                >
              </picture>

              <div
                v-else-if="article.imagePlaceholder"
                class="article-card__image article-card__image--placeholder"
                aria-hidden="true"
              />

              <div class="article-card__content">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
                <UButton
                  :to="`/articles/${article.slug}`"
                  label="Подробнее"
                  color="neutral"
                  variant="outline"
                  size="lg"
                  class="article-card__link"
                />
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>
  </main>
</template>
