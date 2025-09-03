<template>
    
    <nav class="bg-green-100 p-4 rounded shadow-md">
  <ul class="flex flex-wrap gap-4">
    <li>
      <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-green-200 transition">Inicio</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/admin" class="px-3 py-2 rounded hover:bg-green-200 transition">Admin</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/admin/users" class="px-3 py-2 rounded hover:bg-green-200 transition">Usuarios</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/admin/settings" class="px-3 py-2 rounded hover:bg-green-200 transition">Settings</NuxtLink>
    </li>
    
    <li>
      <NuxtLink to="/admin/empresa" class="px-3 py-2 rounded hover:bg-green-200 transition">Empresa admin</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/admin/empresa/show" class="px-3 py-2 rounded hover:bg-green-200 transition">Empresa admin Show</NuxtLink>
    </li>
    <li>
        <NuxtLink to="/admin/empresa/2" class="px-3 py-2 rounded hover:bg-green-200 transition">Empresa admin id: 2</NuxtLink>
      </li>
    <!-- <li>
      <NuxtLink to="/gallery" class="px-3 py-2 rounded hover:bg-amber-200 transition">gallery</NuxtLink>
    </li> -->
    <!-- <li>
      <NuxtLink to="/contacto" class="px-3 py-2 rounded hover:bg-green-200 transition">Contacto</NuxtLink>
    </li> -->
  </ul>
</nav>

  </template>
  
  <script setup>
  </script>