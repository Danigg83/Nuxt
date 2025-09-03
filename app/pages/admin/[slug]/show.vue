<template>
    <div>
      <div class="bg-green-500 text-white p-4 rounded">
        <h1>Panel admin show de {{ slug }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>

definePageMeta({
  layout: 'admin'
})

  const route = useRoute()
  const slug = route.params.slug

  
  </script>
  