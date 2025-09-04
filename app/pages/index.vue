<template>
    <div class="bg-blue-500 text-white p-4">
      <h1>Página principal</h1>
      <p>
      <input class="bg-sky-950" type="text" v-model="Radio"> ->
      {{ Area }} m2
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
