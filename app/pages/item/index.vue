<template>
  <div>
    <h1 class="bg-blue-500 text-white p-4">Lista de Items</h1>
    <ul class="m-4">
      <li v-for="item in items" :key="item.id">
        <NuxtLink :to="`/item/${item.id}`">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

onMounted(async () => {
  try {
    const res = await fetch('/data.json')
    const data = await res.json()
    items.value = data.items
  } catch (error) {
    console.error('Error cargando datos:', error)
  }
})
</script>
