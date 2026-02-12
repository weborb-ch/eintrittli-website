---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Eintrittli"
  text: "Anlass-Registrierung. Einfach gemacht."
  tagline: Konfigurierbare Formulare, QR-Codes und übersichtliches Dashboard. Ohne Bezahlsystem und ohne Login für Teilnehmer.
  image:
    src: /eintrittli_mockup.png
    alt: Eintrittli App Mockup
  actions:
    - theme: brand
      text: Demo ausprobieren
      link: https://demo.eintrittli.ch
    - theme: alt
      text: Kontakt
      link: /#kontakt

features:
  - icon: 📝
    title: Konfigurierbare Formulare
    details: Erstelle individuelle Anmeldeformulare mit Text, E-Mail, Datum, Auswahl und mehr – ganz ohne Programmierung.
  - icon: 📱
    title: QR-Code & Link
    details: Generiere automatisch QR-Codes und teilbare Links für jeden Anlass. Teilnehmer scannen und registrieren sich sofort.
  - icon: 📋
    title: Übersichtliches Dashboard
    details: Behalte alle Anmeldungen im Blick. Das Admin-Dashboard zeigt dir auf einen Blick, wer sich registriert hat.
  - icon: 📊
    title: CSV-Export
    details: Exportiere alle Registrierungen mit einem Klick als CSV-Datei für Excel, Google Sheets oder andere Tools.
  - icon: 🎉
    title: Flexible Anlässe
    details: Definiere Start- und Enddatum für Registrierungen. Formulare werden automatisch geschlossen, wenn die Zeit abläuft.
  - icon: 🚀
    title: Selbst hosten
    details: Volle Kontrolle über deine Daten. Einfaches Deployment mit Docker, dann läuft auf deinem eigenen Server.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #0A55B5 0%, #74B1FF 100%);
  --vp-home-hero-image-background-image: none;
  --vp-home-hero-image-filter: none;

  --vp-breakpoint-xs: 480px;
  --vp-breakpoint-sm: 768px;
  --vp-breakpoint-md: 1024px;
  --vp-breakpoint-lg: 1280px;
}

.VPFeatures {
  padding-top: 40px !important;
}

.VPHero .name {
  font-family: 'Mona Sans Expanded', var(--vp-font-family-base) !important;
}

.VPHero .image-container {
  transform: none;
}

.VPHero .image {
  /* padding: 2rem; */
}

.VPHero .image-container .image-bg {
  display: none;
}

.VPHero .VPImage {
  max-width: 100%;
  height: auto;
}

@media (max-width: 959px) {
  .VPHero .image-container {
    max-width: 100%; 
  }
}
</style>
