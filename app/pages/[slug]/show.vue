<template>
    <div>
      <div class="bg-blue-500 text-white p-4 rounded">
        <h1>Panel show de {{ slug }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const slug = route.params.slug
  </script>
  