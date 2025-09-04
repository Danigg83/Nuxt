<template>
    <li>
      <NuxtLink :to="`/item/${item.id}`">
        {{ item.name }}
      </NuxtLink>
    </li>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    item: { id: number | string; name: string }
  }>()
  </script>
  