<template>
    <div class="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div class="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 class="text-3xl font-extrabold text-blue-600 mb-6 text-center">
          Detalle de {{ slug }}
        </h1>
        
        <div class="space-y-4">
          <div class="flex justify-between bg-blue-50 p-4 rounded-lg shadow-sm">
            <span class="font-semibold text-gray-700">Slug:</span>
            <span class="font-mono text-gray-900">{{ slug }}</span>
          </div>
          
          <div class="flex justify-between bg-green-50 p-4 rounded-lg shadow-sm">
            <span class="font-semibold text-gray-700">ID:</span>
            <span class="font-mono text-gray-900">{{ id }}</span>
          </div>
        </div>
        
        <div class="mt-6 text-center">
          <NuxtLink
            to="/"
            class="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Volver al Inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const slug = route.params.slug
  const id = route.params.id
  </script>
  