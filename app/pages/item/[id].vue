<template>
  <div>
    <div class="bg-blue-500 text-white p-4">
      <h1>Detalle del Item: {{ item?.name || 'Cargando...' }}</h1>
    </div>
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useItemsStore } from '~/stores/items'

interface Item {
  id: number
  name: string
  descripcion: string
}

const route = useRoute()
const id = Number(route.params.id)
const item = ref<Item | null>(null) // tipado correcto

const itemsStore = useItemsStore()

onMounted(async () => {
  item.value = await itemsStore.fetchItemById(id)
  console.log('Item cargado:', item.value);
  
})
</script>
