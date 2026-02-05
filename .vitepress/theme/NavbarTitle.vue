<script setup lang="ts">
import { useData } from 'vitepress'
 
const { site } = useData()
</script>
 
<template>
  <p class="navbar-title">
    <a href="/" class="title mona-sans">{{ site.title }}</a>
    <a href="https://weborb.ch" class="subtitle">von <span class="mona-sans">WebOrb</span></a>
  </p>
</template>
 
<style scoped>
.navbar-title {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  text-decoration: none;
  color: inherit;
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