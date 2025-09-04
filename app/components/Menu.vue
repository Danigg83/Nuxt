<template>
  <nav class="bg-blue-100 p-4 rounded shadow-md">
    <ul class="flex flex-wrap gap-4">
      <li>
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-blue-200 transition">Inicio</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/item" class="px-3 py-2 rounded hover:bg-blue-200 transition">Items</NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/item" :class="[
          'px-3 py-2 rounded hover:bg-blue-200 transition',
          {
            'item-list': $route.path === '/item', // solo ruta exacta
            'bg-blue-400 text-white item-show': $route.path.startsWith('/item/') // solo rutas hijas
          }
        ]">
        Items</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/item" :class="[
          'px-3 py-2 rounded hover:bg-blue-200 transition',
          {
            'item-list': $route.path === '/item', // solo ruta exacta
            'bg-blue-400 text-white item-show': $route.path.startsWith('/item/') // solo rutas hijas
          }
        ]">
          Items
        </NuxtLink>
      </li> -->
      <!--   <li>
        <NuxtLink to="/item/1" class="px-3 py-2 rounded hover:bg-blue-200 transition">Ir al Item 1</NuxtLink>
      </li> -->
      <!--  <li>
        <NuxtLink :to="{ name: 'item-id', params: { id: 1 } }" class="px-3 py-2 rounded hover:bg-blue-200 transition">
          Ir al Item 1 (name route)
        </NuxtLink>
      </li> -->
      <li>
        <NuxtLink to="/personalizada" class="px-3 py-2 rounded hover:bg-blue-200 transition">Personalizada</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/personalizada/show" class="px-3 py-2 rounded hover:bg-blue-200 transition">Personalizada Show
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/personalizada/2" class="px-3 py-2 rounded hover:bg-blue-200 transition">Personalizada id: 2
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/gallery" class="px-3 py-2 rounded hover:bg-amber-200 transition">gallery</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contacto" class="px-3 py-2 rounded hover:bg-blue-200 transition">Contacto</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/acount" class="px-3 py-2 rounded hover:bg-lime-200 transition">Acount</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin" class="px-3 py-2 rounded hover:bg-blue-200 transition">Admin</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
</script>
