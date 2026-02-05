<script setup lang="ts">
import { useData } from 'vitepress'
 
const { site } = useData()
</script>
 
<template>
  <div class="navbar-title">
    <img src="/logo.png" class="logo-placeholder" />
    <p class="title-group">
      <a href="/" class="title mona-sans">{{ site.title }}</a>
      <a href="https://github.com/weborb-ch" class="subtitle">von <span class="mona-sans">WebOrb</span></a>
    </p>
  </div>
</template>
 
<style scoped>
.navbar-title {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

.logo-placeholder {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
 
.mona-sans {
  font-family: 'Mona Sans Expanded', var(--vp-font-family-base);
}
 
.title {
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
 
.subtitle {
  font-size: 10px;
  font-weight: 400;
  color: var(--vp-c-text-2);
  opacity: 0.7;
  line-height: 0.6;
}
</style>