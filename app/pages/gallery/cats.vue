<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CatImage {
  id: string
  url: string
  width: number
  height: number
}

const cats = ref<CatImage[]>([])

onMounted(async () => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  const data: CatImage[] = await res.json()
  cats.value = data
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div v-for="cat in cats" :key="cat.id" class="overflow-hidden rounded-lg shadow">
      <img
        :src="cat.url"
        alt="Gatito"
        class="w-full h-40 object-cover"
      />
    </div>
  </div>
</template>
