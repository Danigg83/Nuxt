<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold">Mi Proyecto</h1>
    </header>
    <Menu  v-if="$route.path !== '/'" />
    <main>
      <NuxtPage />
    </main>
    <Footer />

   
    
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | Mi Proyecto Nuxt'
})
</script>