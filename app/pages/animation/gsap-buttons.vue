<template>
    <div class="flex flex-col gap-4">
      <button ref="boton1" class="px-4 py-2 bg-green-500 text-white rounded">Botón 1</button>
      <button ref="boton2" class="px-4 py-2 bg-purple-500 text-white rounded">Botón 2</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  
  const boton1 = ref<HTMLElement | null>(null)
  const boton2 = ref<HTMLElement | null>(null)
  
  onMounted(() => {
    if (boton1.value) {
      boton1.value.addEventListener('click', () => {
        gsap.to(boton1.value!, { rotation: 360, duration: 1 })
      })
    }
    if (boton2.value) {
      boton2.value.addEventListener('click', () => {
        gsap.to(boton2.value!, { scale: 1.5, duration: 0.5, yoyo: true, repeat: 1 })
      })
    }
  })
  </script>
  