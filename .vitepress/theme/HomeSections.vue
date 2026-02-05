<script setup lang="ts">
</script>

<template>
  <!-- Screenshot Showcase Section -->
  <div class="screenshot-section">
    <div class="container">
      <h2 class="section-title">So funktioniert Eintrittli</h2>
      <p class="section-subtitle">Von der Formularerstellung bis zur Registrierung.</p>
      
      <div class="screenshot-steps">
        <div class="screenshot-row">
          <div class="screenshot-image">
            <div class="screenshot-placeholder">
              <span class="placeholder-icon">🖼️</span>
              <span class="placeholder-text">Screenshot: Formular-Builder</span>
            </div>
          </div>
          <div class="screenshot-content">
            <h3>1. Formular erstellen</h3>
            <p>Definiere die Felder, die du für dein Event benötigst.</p>
          </div>
        </div>
        
        <div class="screenshot-row reverse">
          <div class="screenshot-image">
            <div class="screenshot-placeholder">
              <span class="placeholder-icon">🖼️</span>
              <span class="placeholder-text">Screenshot: Event erstellen</span>
            </div>
          </div>
          <div class="screenshot-content">
            <h3>2. Event anlegen</h3>
            <p>Wähle ein Formular, setze den Zeitraum und erhalte automatisch einen QR-Code.</p>
          </div>
        </div>
        
        <div class="screenshot-row">
          <div class="screenshot-image">
            <div class="screenshot-placeholder">
              <span class="placeholder-icon">🖼️</span>
              <span class="placeholder-text">Screenshot: Registrierungsformular</span>
            </div>
          </div>
          <div class="screenshot-content">
            <h3>3. Teilnehmer registrieren sich</h3>
            <p>Teilnehmer scannen den QR-Code und füllen das Formular aus. Kein Login nötig.</p>
          </div>
        </div>
        
        <div class="screenshot-row reverse">
          <div class="screenshot-image">
            <div class="screenshot-placeholder">
              <span class="placeholder-icon">🖼️</span>
              <span class="placeholder-text">Screenshot: Live-Übersicht</span>
            </div>
          </div>
          <div class="screenshot-content">
            <h3>4. Live verfolgen & exportieren</h3>
            <p>Sieh neue Anmeldungen in Echtzeit und exportiere alles als CSV.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CTA Section -->
  <div class="cta-section" id="kontakt">
    <div class="container">
      <h2 class="cta-title">Interesse an Eintrittli?</h2>
      <p class="cta-subtitle">Schreib mir einfach eine E-Mail, dann helfe ich dir gerne weiter!</p>
      <div class="cta-buttons">
        <a href="mailto:jannis@eintrittli.ch" class="cta-button primary">jannis@eintrittli.ch</a>
      </div>
      <p class="cta-selfhost">Du kennst dich mit IT aus? Dann kannst du Eintrittli auch selbst hosten.</p>
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
  line-height: 1;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #257DEC;
}

.section-subtitle {
  font-size: 1.2rem;
  text-align: center;
  color: var(--vp-c-text-2);
  margin-bottom: 48px;
}

.screenshot-steps {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.screenshot-row {
  display: flex;
  align-items: center;
  gap: 48px;
}

.screenshot-row.reverse {
  flex-direction: row-reverse;
}

.screenshot-image {
  flex: 1;
  min-width: 0;
}

.screenshot-content {
  flex: 1;
  min-width: 0;
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

.screenshot-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--vp-c-text-1);
}

.screenshot-content p {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
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
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  border-radius: 24px;
  margin: 40px 24px 80px;
  padding: 64px 24px;
  max-width: 1100px;
  margin: auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-subtitle {
  font-size: 1.1rem;
  margin-bottom: 32px;
  font-weight: 500;
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
  transform: translateY(-1px);
}

.cta-button.primary {
  background: white;
  color: var(--vp-c-text-1);
}

.cta-button.primary:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
}

.cta-button.secondary {
  background: transparent;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.cta-selfhost {
  margin-top: 24px;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.cta-link {
  color: white;
  font-size: 0.95rem;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.cta-link:hover {
  opacity: 1;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .screenshot-row,
  .screenshot-row.reverse {
    flex-direction: column;
  }
  
  .screenshot-image,
  .screenshot-content {
    width: 100%;
  }
  
  .screenshot-row {
    gap: 24px;
  }
  
  .screenshot-content {
    text-align: center;
  }
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
  
  .screenshot-content h3 {
    font-size: 1.25rem;
  }
  
  .screenshot-content p {
    font-size: 1rem;
  }
}
</style>
