<script setup lang="ts">
</script>

<template>
  <!-- Screenshot Showcase Section -->
  <div class="screenshot-section">
    <div class="container">
      <h2 class="section-title">So funktioniert Eintrittli</h2>
      <p class="section-subtitle">Von der Formularerstellung bis zur Registrierung – alles in wenigen Klicks.</p>
      
      <div class="screenshot-grid">
        <div class="screenshot-card">
          <div class="screenshot-placeholder">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">Screenshot: Formular-Builder</span>
          </div>
          <h3>1. Formular erstellen</h3>
          <p>Definiere die Felder, die du für dein Event benötigst. Drag & Drop macht es einfach.</p>
        </div>
        
        <div class="screenshot-card">
          <div class="screenshot-placeholder">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">Screenshot: Event erstellen</span>
          </div>
          <h3>2. Event anlegen</h3>
          <p>Wähle ein Formular, setze den Zeitraum und erhalte automatisch einen QR-Code.</p>
        </div>
        
        <div class="screenshot-card">
          <div class="screenshot-placeholder">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">Screenshot: Registrierungsformular</span>
          </div>
          <h3>3. Teilnehmer registrieren sich</h3>
          <p>Teilnehmer scannen den QR-Code und füllen das Formular aus – kein Login nötig.</p>
        </div>
        
        <div class="screenshot-card">
          <div class="screenshot-placeholder">
            <span class="placeholder-icon">🖼️</span>
            <span class="placeholder-text">Screenshot: Live-Übersicht</span>
          </div>
          <h3>4. Live verfolgen & exportieren</h3>
          <p>Sieh neue Anmeldungen in Echtzeit und exportiere alles als CSV.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Use Cases Section -->
  <div class="usecases-section">
    <div class="container">
      <h2 class="section-title">Perfekt für</h2>
      
      <div class="usecase-grid">
        <div class="usecase-card">
          <span class="usecase-icon">🎭</span>
          <h3>Vereinsanlässe</h3>
          <p>Generalversammlungen, Vereinsfeste, Mitgliederevents</p>
        </div>
        
        <div class="usecase-card">
          <span class="usecase-icon">🎓</span>
          <h3>Schulen & Kurse</h3>
          <p>Elternabende, Workshops, Weiterbildungen</p>
        </div>
        
        <div class="usecase-card">
          <span class="usecase-icon">🏢</span>
          <h3>Firmenevents</h3>
          <p>Teamevents, Betriebsausflüge, Weihnachtsfeiern</p>
        </div>
        
        <div class="usecase-card">
          <span class="usecase-icon">🎉</span>
          <h3>Private Feiern</h3>
          <p>Hochzeiten, Geburtstage, Jubiläen</p>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="cta-section" id="kontakt">
    <div class="container">
      <h2 class="cta-title">Bereit für einfache Event-Registrierung?</h2>
      <p class="cta-subtitle">Teste Eintrittli kostenlos oder hoste es selbst auf deinem Server.</p>
      <div class="cta-buttons">
        <a href="https://demo.eintrittli.ch" class="cta-button primary">Demo starten</a>
        <a href="https://github.com/weborb-ch/eintrittli" class="cta-button secondary">GitHub Repository</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screenshot-section,
.usecases-section,
.cta-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 48px;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.screenshot-card {
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.screenshot-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.screenshot-placeholder {
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  border-radius: 12px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  border: 2px dashed #ccc;
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 8px;
}

.placeholder-text {
  font-size: 0.85rem;
  color: #888;
  text-align: center;
  padding: 0 16px;
}

.screenshot-card h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.screenshot-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.usecase-card {
  text-align: center;
  padding: 32px 24px;
  background: var(--vp-c-bg-soft);
  border-radius: 16px;
  transition: transform 0.2s;
}

.usecase-card:hover {
  transform: translateY(-4px);
}

.usecase-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 16px;
}

.usecase-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.usecase-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 24px;
  margin: 40px 24px 80px;
  padding: 64px 24px;
  max-width: 1100px;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 16px;
  background: none;
  -webkit-text-fill-color: white;
}

.cta-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.cta-button.primary {
  background: white;
  color: #667eea;
}

.cta-button.primary:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .screenshot-section,
  .usecases-section {
    padding: 48px 16px;
  }
}
</style>
