<template>
  <div class="bg-blue-500 text-white p-4">
    <h1>Página principal</h1>
    <h3 class="text-3xl font-extrabold m-4">Calcular área</h3>

    <p class="text-xl font-extrabold flex items-center gap-2">
      <span>Radio:</span>
      <input class="bg-sky-950 text-xl p-2 rounded" type="number" v-model.number="Radio"
        placeholder="Introduce el radio" min="0" />
      <span>m → Área del círculo:</span>
      <span class="ml-2">{{ Area.toFixed(2) }} m²</span>
    </p>

    <p v-if="error" class="text-red-200 font-bold mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">

const Radio = ref < number | null > (null)
const error = ref('')

const Area = computed(() => {
  const numero = Number(Radio.value)
  if (isNaN(numero) || numero < 0) return 0
  return calculateCircleArea(numero)
})

watch(Radio, (val) => {

  const numero = Number(val)

  if (isNaN(numero)) {
    error.value = 'Debes introducir un número'
  } else if (numero < 0) {
    error.value = 'El número debe ser mayor o igual a 0'
  } else {
    error.value = ''
  }
})

</script>
