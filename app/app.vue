<template>

  <!-- Mensajes -->
  <div class="fixed top-4 right-4 flex flex-col gap-2 z-50">
      <div
        v-for="msg in flash.messages"
        :key="msg.id"
        class="px-4 py-2 rounded shadow text-white"
        :class="{
          'bg-green-500': msg.type === 'success',
          'bg-red-500': msg.type === 'error',
          'bg-yellow-500': msg.type === 'warning'
        }"
      >
        {{ msg.text }} <!-- {{ msg.id }} -->
        <button class="ml-2" @click="flash.removeMessage(msg.id)">✖</button>
      </div>
    </div>
  <!-- <div class="bg-red-500 p-6 text-white">Test Tailwind</div> -->
  <NuxtLayout />
  <!-- <NuxtPage /> -->
</template>

<script setup>
useHead({
  titleTemplate: '%s | Mi Proyecto Nuxt',
  meta: [
    { name: 'description', content: 'Este es un proyecto Nuxt 3 con SEO global.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Mi Proyecto Nuxt' }
  ]
})


import { useFlashStore } from '~/stores/flash'

const flash = useFlashStore()
</script>

