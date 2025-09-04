<template>
  <div class="max-w-2xl mx-auto p-4">
    <!-- Header -->
    <h1 class="bg-blue-500 text-white p-4 rounded-t-lg text-2xl font-bold">Lista de Items</h1>

    <!-- Mensaje de carga -->
    <div v-if="loading" class="text-center text-gray-500 p-4">
      Cargando items...
    </div>

    <!-- Mensaje de error -->
    <div v-if="error" class="text-center text-red-500 p-4">
      Error cargando datos: {{ error }}
    </div>

    <!-- Lista de items -->
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <li v-for="item in items" :key="item.id">
        <NuxtLink
          :to="`/item/${item.id}`"
          class="block p-4 bg-white shadow rounded hover:shadow-lg hover:bg-blue-50 transition"
        >
          <h2 class="font-semibold text-lg">{{ item.name }}</h2>
          <p class="text-gray-500 text-sm">ID: {{ item.id }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Item {
  id: number
  name: string
  descripcion?: string
}

const items = ref<Item[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const res = await fetch('/data.json')
    const data = await res.json()
    items.value = data.items
  } catch (err) {
    error.value = (err as Error).message
  } finally {
    loading.value = false
  }
})
</script>
