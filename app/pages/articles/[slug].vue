<script setup lang="ts">
import { getArticleBySlug, parseArticleContent } from '~~/shared/data/articles'

const route = useRoute()
const article = getArticleBySlug(String(route.params.slug))

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Статья не найдена'
  })
}

usePageSeo(article.title, article.description)

const contentBlocks = parseArticleContent(article.content)
</script>

<template>
  <main>
    <article class="article-page">
      <UContainer>
        <UButton
          to="/articles"
          label="К статьям"
          icon="i-lucide-arrow-left"
          color="neutral"
          variant="link"
          class="article-page__back"
        />

        <header class="article-page__header">
          <h1>{{ article.title }}</h1>
        </header>

        <div class="article-page__content">
          <template v-for="(block, index) in contentBlocks" :key="`${block.type}-${index}`">
            <h2 v-if="block.type === 'heading' && block.level === 2">
              {{ block.text }}
            </h2>
            <h3 v-else-if="block.type === 'heading'">
              {{ block.text }}
            </h3>
            <p v-else-if="block.type === 'paragraph'">
              {{ block.text }}
            </p>
            <ul v-else>
              <li v-for="item in block.items" :key="item">
                {{ item }}
              </li>
            </ul>
          </template>
        </div>
      </UContainer>
    </article>
  </main>
</template>
