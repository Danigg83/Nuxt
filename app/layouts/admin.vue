<template>
  <header class="bg-white shadow p-4">
      <h1 class="text-xl font-bold">Admin</h1>
    </header>
    <AdminMenu />
    <main>
      <NuxtPage />
    </main>
  <Footer />   

</template>

<script setup>
//import AdminMenu from '~/components/admin/AdminMenu.vue'
useHead({
  titleTemplate: '%s | Admin Panel'
})
</script>
