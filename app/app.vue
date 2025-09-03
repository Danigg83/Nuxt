<template>
  <!-- <div class="bg-red-500 p-6 text-white">Test Tailwind</div> -->
  <NuxtLayout />
  <!-- <NuxtPage /> -->
</template>

<script setup>
useHead({
  titleTemplate: '%s | Mi Proyecto Nuxt',
  meta: [
    { name: 'description', content: 'Este es un proyecto Nuxt 3 con SEO global.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Mi Proyecto Nuxt' }
  ]
})
</script>

