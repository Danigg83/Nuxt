<template>
  <div class="flex flex-col md:flex-row gap-4 p-4">
    <!-- Columna de menú -->
    <div class="md:w-1/4 flex flex-col gap-3 px-2">
      <NuxtLink
        to="/animation"
        class="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-500 text-center"
      >
        Inicio
      </NuxtLink>
      <NuxtLink
        to="/animation/gsap-test"
        class="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-500 text-center"
      >
      gsap-test
      </NuxtLink>
      <NuxtLink
        to="/animation/gsap-scroll"
        class="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-500 text-center"
      >
      gsap-scroll
      </NuxtLink>
      <NuxtLink
        to="/animation/gsap-buttons"
        class="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-500 text-center"
      >
      gsap-buttons
      </NuxtLink>
    </div>

    <!-- Columna de contenido dinámico -->
    <div class="md:w-3/4">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
// No necesitas nada por ahora
</script>