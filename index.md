---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Eintrittli"
  text: "Event-Registrierung. Einfach gemacht."
  tagline: Konfigurierbare Formulare, QR-Codes und Live-Übersicht. Ohne Bezahlsystem, ohne Login für Teilnehmer.
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
    details: Generiere automatisch QR-Codes und teilbare Links für jedes Event. Teilnehmer scannen und registrieren sich sofort.
  - icon: 🔴
    title: Live-Ansicht
    details: Beobachte neue Anmeldungen in Echtzeit. Die Admin-Konsole aktualisiert sich automatisch alle 5 Sekunden.
  - icon: 📊
    title: CSV-Export
    details: Exportiere alle Registrierungen mit einem Klick als CSV-Datei für Excel, Google Sheets oder andere Tools.
  - icon: 🎉
    title: Flexible Events
    details: Definiere Start- und Enddatum für Registrierungen. Formulare werden automatisch geschlossen, wenn die Zeit abläuft.
  - icon: 🚀
    title: Selbst hosten
    details: Volle Kontrolle über deine Daten. Einfaches Deployment mit Docker, dann läuft auf deinem eigenen Server.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #0A55B5 0%, #74B1FF 100%);
  --vp-home-hero-image-background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --vp-home-hero-image-filter: blur(56px);
}

.VPFeatures {
  padding-top: 40px !important;
}
</style>
