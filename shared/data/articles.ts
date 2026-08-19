import rationalExtrovertsContent from './articles/rational-extroverts.md?raw'

export interface Article {
  slug: string
  title: string
  description: string
  content: string
  image?: {
    src: string
    alt: string
  }
}

export type ArticleContentBlock =
  | { type: 'heading', level: 2 | 3, text: string }
  | { type: 'paragraph', text: string }
  | { type: 'list', items: string[] }

export const articles: Article[] = [
  {
    slug: 'racionalnye-ekstraverty',
    title: 'Рациональные экстраверты',
    description: 'Кто превращает цель в последовательность шагов, а кто ищет действия, которые сохранят эффективность через десять и сто лет? Разбор проявлений, особенностей коммуникации, отношения к людям и работе.',
    content: rationalExtrovertsContent,
    image: {
      src: '/rational-extroverts.png',
      alt: 'Стилизованный портрет человека на фоне силуэтов, часов и шахматной фигуры'
    }
  }
]

export function getArticleBySlug(slug: string) {
  return articles.find(article => article.slug === slug)
}

export function parseArticleContent(markdown: string): ArticleContentBlock[] {
  const blocks: ArticleContentBlock[] = []
  let paragraphLines: string[] = []
  let listItems: string[] = []
  let titleSkipped = false

  const flushParagraph = () => {
    if (!paragraphLines.length) return

    blocks.push({
      type: 'paragraph',
      text: paragraphLines.join(' ')
    })
    paragraphLines = []
  }

  const flushList = () => {
    if (!listItems.length) return

    blocks.push({
      type: 'list',
      items: listItems
    })
    listItems = []
  }

  for (const sourceLine of markdown.trim().replace(/\r\n?/g, '\n').split('\n')) {
    const line = sourceLine.trim()
    const heading = /^(#{1,2})\s+(.+)$/.exec(line)

    if (heading) {
      flushParagraph()
      flushList()

      const marker = heading[1] ?? ''
      const text = heading[2] ?? ''

      if (!titleSkipped && marker === '#') {
        titleSkipped = true
        continue
      }

      blocks.push({
        type: 'heading',
        level: marker === '#' ? 2 : 3,
        text
      })
      continue
    }

    if (line.startsWith('- ')) {
      flushParagraph()
      listItems.push(line.slice(2).trim())
      continue
    }

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    flushList()
    paragraphLines.push(line)
  }

  flushParagraph()
  flushList()

  return blocks
}
