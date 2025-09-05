<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold text-center mb-6">Explora las galerías</h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Pokémon -->
        <NuxtLink to="/gallery/pokemon" class="group block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pokémon"
            class="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform"
          />
          <div class="p-4 text-center">
            <h2 class="text-xl font-semibold text-gray-800">Pokémon</h2>
            <p class="text-gray-500">Colección de Pokémon oficiales</p>
          </div>
        </NuxtLink>
  
        <!-- Rick & Morty -->
        <NuxtLink to="/gallery/rick-morty" class="group block rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick and Morty"
            class="w-full h-48 object-cover bg-gray-50 group-hover:scale-105 transition-transform"
          />
          <div class="p-4 text-center">
            <h2 class="text-xl font-semibold text-gray-800">Rick & Morty</h2>
            <p class="text-gray-500">Personajes de la serie</p>
          </div>
        </NuxtLink>
  
        <!-- Tarjeta Gatitos -->
      <NuxtLink to="/gallery/cats" class="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img
          src="https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg"
          alt="Gatitos"
          class="w-full h-48 object-cover bg-gray-100 group-hover:scale-105 transition-transform"
        />
        <div class="p-4 bg-white">
          <h2 class="font-semibold text-lg">Gatitos</h2>
          <p class="text-sm text-gray-600">Imágenes aleatorias de gatos 🐱</p>
        </div>
      </NuxtLink>

      <!-- Tarjeta Perritos -->
      <NuxtLink to="/gallery/dogs" class="group block rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <img
              src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg"
              alt="Perritos"
              class="w-full h-48 object-cover bg-gray-100 group-hover:scale-105 transition-transform"
            />
        <div class="p-4 bg-white">
          <h2 class="font-semibold text-lg">Perritos</h2>
          <p class="text-sm text-gray-600">Fotos aleatorias de perros 🐶</p>
        </div>
      </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'no-menu'
  })
  </script>
  