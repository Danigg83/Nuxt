<template>
    <section>
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold">Pokémon Gallery</h2>
        <div class="flex items-center gap-2">
          <label class="text-sm">Mostrar:</label>
          <select v-model.number="limit" class="border rounded px-2 py-1">
            <option :value="12">12</option>
            <option :value="24">24</option>
            <option :value="48">48</option>
          </select>
          <button @click="reload" class="ml-2 bg-amber-500 text-white px-3 py-1 rounded">Recargar</button>
        </div>
      </div>
  
      <div v-if="loading" class="text-center py-20">Cargando imágenes...</div>
      <div v-if="error" class="text-red-500">{{ error }}</div>
  
      <div v-if="items.length" ref="gridRef" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <article
          v-for="item in items"
          :key="item.id"
          class="card bg-white rounded shadow p-3 flex flex-col items-center transform hover:scale-105 transition"
        >
          <div class="w-full h-40 flex items-center justify-center mb-2">
            <img
              :src="item.image"
              :alt="item.name"
              class="object-contain max-h-36"
              loading="lazy"
              @error="onImgError"
            />
          </div>
          <h3 class="text-center font-semibold capitalize">{{ item.name }}</h3>
          <small class="text-gray-500">#{{ item.id }}</small>
        </article>
      </div>
  
      <p v-if="!loading && !items.length" class="text-center py-10">No hay imágenes.</p>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch, nextTick } from 'vue'
  import gsap from 'gsap'
  
  const items = ref<Array<{ id: number; name: string; image: string }>>([])
  const loading = ref(false)
  const error = ref('')
  const limit = ref<number>(24) // se puede cambiar desde el select
  const gridRef = ref<HTMLElement | null>(null)
  
  // Genera URL de artwork oficial por id
  const artworkUrl = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  
  const fetchPokemons = async (n: number) => {
    loading.value = true
    error.value = ''
    items.value = []
    try {
      // PokeAPI: obtener nombres y urls (limit)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`)
      if (!res.ok) throw new Error('Error cargando lista')
      const json = await res.json()
      // json.results es array con name y url (la url contiene id implícito)
      items.value = json.results.map((r: any, index: number) => {
        // la API devuelve ordenados; úsalo para calcular id
        const id = index + 1
        return {
          id,
          name: r.name,
          image: artworkUrl(id)
        }
      })
      await nextTick()
      animateIn()
    } catch (e: any) {
      error.value = e.message || 'Error desconocido'
    } finally {
      loading.value = false
    }
  }
  
  const animateIn = () => {
    if (!gridRef.value) return
    const cards = gridRef.value.querySelectorAll('.card')
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 30, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        stagger: 0.04,
        ease: 'power2.out',
        duration: 0.6
      }
    )
  }
  
  const onImgError = (e: Event) => {
    const img = e.target as HTMLImageElement
    img.src = '/placeholder.png' // pon un placeholder en /public/placeholder.png
  }
  
  const reload = () => fetchPokemons(limit.value)
  
  // inicial
  onMounted(() => {
    fetchPokemons(limit.value)
  })
  
  // si cambias el limit (por query o select) vuelve a cargar
  watch(limit, (v) => {
    fetchPokemons(v)
  })
  </script>
  
  <style scoped>
  /* Si quieres un poco más de estilo */
  .card img {
    transition: transform .2s ease;
  }
  .card:hover img {
    transform: translateY(-4px) scale(1.03);
  }
  </style>
  