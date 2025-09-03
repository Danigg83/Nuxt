<template>
  <div>
    <div class="bg-blue-500 text-white p-4">
      <h1>Detalle del Item {{ id }}</h1>
    </div>
    <div class="p-4">

      <p>ID del item: {{ id }}</p>
      <br>
      <hr>
      <br>

      <NuxtLink to="/item">Volver a la lista</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'


const route = useRoute()
const id = route.params.id
</script>
