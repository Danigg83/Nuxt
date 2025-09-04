<template>
  <div>
    <div class="bg-blue-500 text-white p-4">
      <h1>Detalle del Item: {{ item?.name || 'Cargando...' }}</h1>
    </div>
    <ItemShow :item="item" />
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
  //console.log('Item cargado:', item.value);
  
})
</script>
