<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Galería Rick & Morty</h1>
  
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
          v-for="character in characters"
          :key="character.id"
          class="bg-white rounded shadow hover:shadow-lg p-3 flex flex-col items-center"
        >
          <img
            :src="character.image"
            :alt="character.name"
            class="w-24 h-24 rounded-full object-cover"
          />
          <p class="mt-2 font-medium text-center">{{ character.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const characters = ref([])
  
  onMounted(async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character?page=1')
    const data = await res.json()
    characters.value = data.results
  })
  </script>
  