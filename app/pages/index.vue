<template>
    <div class="bg-blue-500 text-white p-4">
      <h1>Página principal</h1>
  </div>
</template>

<script setup>
useHead({
  title: 'Inicio - Mi Proyecto Nuxt',
  meta: [
    { name: 'description', content: 'Bienvenido a mi proyecto Nuxt 3 con SEO.' },
    { property: 'og:title', content: 'Inicio - Mi Proyecto Nuxt' },
    { property: 'og:description', content: 'Bienvenido a mi proyecto Nuxt 3 con SEO.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
