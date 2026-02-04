import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eintrittli",
  description: "Einfaches Eingangskontrollsystem mit konfigurierbaren Formularen und Datenexport. Keine Bezahlungen, kein Login.",
  lang: 'de-CH',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://demo.eintrittli.ch' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weborb-ch/eintrittli' }
    ]
  }
})
