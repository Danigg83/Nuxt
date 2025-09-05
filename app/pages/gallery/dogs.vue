<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Galería de Perritos 🐶</h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="(dog, i) in dogs"
          :key="i"
          class="bg-gray-200 rounded overflow-hidden shadow"
        >
          <img
            :src="dog"
            alt="Perrito"
            class="w-full h-40 object-cover"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  
  const dogs = ref([])
  
  onMounted(async () => {
    const res = await fetch('https://dog.ceo/api/breeds/image/random/20')
    const data = await res.json()
    dogs.value = data.message
  })
  </script>
  