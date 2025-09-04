<template>
    <div class="space-y-8">
      <div
        v-for="i in 20"
        :key="i"
        class="p-8 bg-sky-600 rounded text-white text-center text-xl"
        ref="bloques"
      >
        Bloque {{ i }}
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  
  gsap.registerPlugin(ScrollTrigger)
  
  const bloques = ref<HTMLElement[]>([])
  
  onMounted(() => {
    bloques.value.forEach((bloque) => {
      gsap.from(bloque, {
        scrollTrigger: {
          trigger: bloque,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
      })
    })
  })
  </script>
  