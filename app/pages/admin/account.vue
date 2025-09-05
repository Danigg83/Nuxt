<template>
  <div class="bg-lime-500 text-white p-4">
    <h1 class="text-2xl font-bold">Página Account</h1>
  </div>

  <div class="link-account flex flex-col md:flex-row gap-4 p-4">
    <!-- Columna de botones -->
    <div class="md:w-1/2 flex flex-col gap-3">
     
      <NuxtLink
        to="/admin/account/profile"
        class="bg-white text-lime-800 font-semibold px-4 py-2 rounded hover:bg-lime-100 transition text-center"
      >
          Profile
      </NuxtLink>
      <NuxtLink
        to="/admin/account/settings"
        class="bg-white text-lime-800 font-semibold px-4 py-2 rounded hover:bg-lime-100 transition text-center"
      >
          Settings
      </NuxtLink>
    </div>

    <!-- Columna de contenido dinámico -->
    <div class="md:w-1/2">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const userStore = useUserStore()

console.log(
  'userStore.session en account.vue:',
  userStore

);

</script>
