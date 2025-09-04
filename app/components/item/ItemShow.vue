<template>
  <div class="p-4" v-if="item">
    <p><strong>ID del item:</strong> {{ item.id }}</p>
    <p><strong>Nombre:</strong> {{ item.name }}</p>
    <p><strong>Descripción:</strong> {{ item.descripcion }}</p>
    <br>
    <hr>
    <br>
    <NuxtLink to="/item">Volver a la lista</NuxtLink>
  </div>

  <div class="p-4" v-else>
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
