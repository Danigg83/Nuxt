<template>
  <div class="min-h-screen bg-amber-50">
    <!-- Header -->
    <header class="bg-amber-500 text-white p-4">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <h1 class="text-2xl font-bold">Galería</h1>

        <!-- Menú horizontal -->
        <nav>
          <ul class="flex gap-3">
            <li><NuxtLink to="/" class="px-3 py-2 rounded hover:bg-amber-600/30">Inicio</NuxtLink></li>
           <!--  <li><NuxtLink to="/contacto" class="px-3 py-2 rounded hover:bg-amber-600/30">Contacto</NuxtLink></li>
            <li><NuxtLink to="/account" class="px-3 py-2 rounded hover:bg-amber-600/30">Account</NuxtLink></li> -->
            <li><NuxtLink to="/admin" class="px-3 py-2 rounded hover:bg-amber-600/30">Admin</NuxtLink></li>
            <li><NuxtLink to="/gallery" class="px-3 py-2 rounded bg-amber-700/30">Gallery</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Layout content: izquierda menú vertical opcional + derecha contenido (NuxtPage) -->
    <div class="max-w-5xl mx-auto p-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Columna izquierda (menú/links) -->
        <aside class="md:col-span-1 bg-white rounded shadow p-4">
          <h2 class="font-semibold mb-3">Navegación</h2>
          <ul class="flex flex-col gap-2">
            <li><NuxtLink to="/gallery" class="block px-3 py-2 rounded hover:bg-gray-100">Galería</NuxtLink></li>
            <li><NuxtLink to="/gallery/pokemon" class="block px-3 py-2 rounded hover:bg-gray-100">Pokémon</NuxtLink></li>
            <li><NuxtLink to="/gallery/rick-morty" class="block px-3 py-2 rounded hover:bg-gray-100">Rick & Morty</NuxtLink></li>
            <li><NuxtLink to="/gallery/cats" class="block px-3 py-2 rounded hover:bg-gray-100">Gatitos</NuxtLink></li>
            <li><NuxtLink to="/gallery/dogs" class="block px-3 py-2 rounded hover:bg-gray-100">Perritos</NuxtLink></li>
          </ul>
        </aside>

        <!-- Contenido (subpágina) -->
        <main class="md:col-span-2">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-menu'
})
</script>

<style scoped>
/* pequeño ajuste si quieres */
</style>
