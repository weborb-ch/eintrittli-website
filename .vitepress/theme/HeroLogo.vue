<script setup lang="ts">
</script>

<template>
  <div class="hero-logo-wrapper">
    <img src="/logo-placeholder.svg" alt="Eintrittli Logo" class="hero-logo" />
    <span class="hero-logo-byline">von WebOrb</span>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@500&display=swap');

.hero-logo-wrapper {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.hero-logo {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.hero-logo-byline {
  font-family: 'Caveat', cursive;
  font-size: 1rem;
  color: var(--vp-c-text-2);
  opacity: 0.7;
  white-space: nowrap;
}
</style>
