<template>
    <div class="bg-blue-500 text-white p-4">
    
        <h1 class="text-2xl font-bold">Prueba de GSAP</h1>
    </div>
    <div class="p-8">

      <div ref="box" class="w-32 h-32 bg-blue-500"></div>
      <button @click="animar" class="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        Animar
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const box = ref<HTMLDivElement | null>(null)
  
  const animar = () => {
    if (!box.value) return
  
    gsap.to(box.value, {
      x: 300,
      rotation: 360,
      duration: 2,
      ease: "power2.out",
    })
  }
  
  onMounted(() => {
    console.log('GSAP cargado:', gsap)
  })
  </script>
  
  <style scoped>
  /* opcional: estilos para centrar la caja */
  </style>
  