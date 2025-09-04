<template>
    <div class="bg-blue-500 text-white p-4">
      <h1>Página principal</h1>
      <h3 class="text-3xl font-extrabold m-4">Calcular area</h3>
      <p  class="text-xl font-extrabold ">
        Radio <input class="bg-sky-950 text-xl p-2" type="text" v-model="Radio"> m = 
      {{ Area }} m²
      </p>
  </div>
</template>

<script setup>

const Radio = ref(0);
// Área se recalcula sola cuando cambia Radio
const Area = computed(() => calculateCircleArea(Radio.value))

onMounted(() => {
  console.log(PI);

  console.log('Página principal cargada');
})
useHead({
  title: 'Inicio - Mi Proyecto Nuxt',
  meta: [
    { name: 'description', content: 'Bienvenido a mi proyecto Nuxt 3 con SEO.' },
    { property: 'og:title', content: 'Inicio - Mi Proyecto Nuxt' },
    { property: 'og:description', content: 'Bienvenido a mi proyecto Nuxt 3 con SEO.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
