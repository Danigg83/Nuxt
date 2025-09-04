<template>
  <div v-if="item" class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden m-4">
    <!-- Header -->
    <div class="bg-blue-600 text-white p-4">
      <h2 class="text-2xl font-bold">{{ item.name }}</h2>
      <p class="text-sm">ID: {{ item.id }}</p>
    </div>

    <!-- Body -->
    <div class="p-4 space-y-3">
      <p><span class="font-semibold">Nombre:</span> {{ item.name }}</p>
      <p><span class="font-semibold">Descripción:</span> {{ item.descripcion }}</p>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t flex justify-end">
      <NuxtLink
        to="/item"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Volver a la lista
      </NuxtLink>
    </div>
  </div>

  <div v-else class="text-center text-gray-500 mt-10">
    Cargando item...
  </div>
</template>

<script setup lang="ts">
interface Item {
  id: number
  name: string
  descripcion: string
}

defineProps<{
  item: Item | null
}>()
</script>
