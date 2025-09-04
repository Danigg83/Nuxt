<template>
    <div class="p-8">
      <h1 ref="titulo" class="text-4xl font-bold">¡Hola GSAP!</h1>
      <p ref="parrafo" class="mt-4">Esto es una animación simple al cargar.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  
  const titulo = ref<HTMLElement | null>(null)
  const parrafo = ref<HTMLElement | null>(null)
  
  onMounted(() => {
    if (titulo.value) gsap.from(titulo.value, { opacity: 0, y: -50, duration: 1 })
    if (parrafo.value) gsap.from(parrafo.value, { opacity: 0, x: 50, duration: 1, delay: 0.5 })
  })
  </script>
  