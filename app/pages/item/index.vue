<template>
  <div> 
    <div class="bg-blue-500 text-white p-4">
    <h1>Lista de Items</h1>
  </div>
    <ul class="m-4">
      <li v-for="item in itemsStore.items" :key="item.id">
        <NuxtLink :to="`/item/${item.id}`" >{{ item.name }} <span v-if="item.id == 2">( prueba de redireccion a / )</span></NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useItemsStore } from '~/stores/items'

const itemsStore = useItemsStore()
</script>
