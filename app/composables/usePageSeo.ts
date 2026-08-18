export function usePageSeo(title: string, description: string) {
  const route = useRoute()
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/$/, '')
  const canonical = `${siteUrl}${route.path === '/' ? '' : route.path}`
  const fullTitle = title === 'Соционика' ? title : `${title} — Соционика`

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: fullTitle,
    ogDescription: description,
    ogType: 'website',
    ogLocale: 'ru_RU',
    ogUrl: canonical,
    twitterCard: 'summary',
    twitterTitle: fullTitle,
    twitterDescription: description
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }]
  })
}
