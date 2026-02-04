import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Eintrittli",
  description: "Einfaches Event-Registrierungssystem mit konfigurierbaren Formularen, QR-Codes und CSV-Export. Keine Bezahlungen, kein Login für Teilnehmer.",
  lang: 'de-CH',
  appearance: false,
  head: [
    ['meta', { property: 'og:title', content: 'Eintrittli - Event-Registrierung. Einfach gemacht.' }],
    ['meta', { property: 'og:description', content: 'Konfigurierbare Formulare, QR-Codes und Live-Übersicht - ohne Bezahlsystem, ohne Login für Teilnehmer.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Demo', link: 'https://demo.eintrittli.ch' }
    ],

    sidebar: [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/weborb-ch/eintrittli' }
    ],

    footer: {
      message: 'Open Source unter MIT Lizenz',
      copyright: '© 2026 WebOrb'
    }
  }
})
