<script setup lang="ts">
</script>

<template>
  <a href="/" class="custom-nav-title">
    <div class="nav-logo">
      <img src="/logo.png" alt="Logo" />
    </div>
    <div class="nav-text">
      <span class="nav-brand">Eintrittli</span>
      <span class="nav-subtitle">von WebOrb</span>
    </div>
  </a>
</template>

<style scoped>
.custom-nav-title {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 10px;
}

.nav-logo {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.nav-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
}

.nav-brand {
  font-family: 'Mona Sans Expanded', var(--vp-font-family-base);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.nav-subtitle {
  font-size: 9px;
  color: var(--vp-c-text-3);
  font-weight: 400;
  margin-top: 2px;
}
</style>
