<template>
  <nav class="bg-blue-100 p-4 rounded shadow-md">
    <ul class="flex flex-wrap gap-4">
      <li>
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-blue-200 transition">Inicio</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/item" class="px-3 py-2 rounded hover:bg-blue-200 transition">Items</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/item/1" class="px-3 py-2 rounded hover:bg-blue-200 transition">Ir al Item 1</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="{ name: 'item-id', params: { id: 1 } }" class="px-3 py-2 rounded hover:bg-blue-200 transition">
          Ir al Item 1 (named route)
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/empresa" class="px-3 py-2 rounded hover:bg-blue-200 transition">Empresa</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/empresa/show" class="px-3 py-2 rounded hover:bg-blue-200 transition">Empresa Show</NuxtLink>
      </li>
      <li>
      <NuxtLink to="/gallery" class="px-3 py-2 rounded hover:bg-amber-200 transition">gallery</NuxtLink>
    </li>
      <li>
        <NuxtLink to="/contacto" class="px-3 py-2 rounded hover:bg-blue-200 transition">Contacto</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/acount" class="px-3 py-2 rounded hover:bg-blue-200 transition">acount</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin" class="px-3 py-2 rounded hover:bg-blue-200 transition">Admin</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>
