<template>
  <div>
    <h1>Detalle del Item {{ id }}</h1>
    <p>ID del item: {{ id }}</p>
    <NuxtLink to="/item">Volver a la lista</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>
