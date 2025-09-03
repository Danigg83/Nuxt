
  
  <template>
    <div class="bg-amber-500 text-white p-4">
      <h1 class="text-2xl font-bold">Página de gallery</h1>
      <p>Esta es la página gallery /gallery </p>
    </div>
  
    <div class="flex flex-col md:flex-row gap-4 p-4">
      <!-- Columna de botones -->
      <div class="md:w-1/2 flex flex-col gap-3">
        <nav class="bg-amber-100 p-4 rounded shadow-md">
    <ul class="flex flex-col gap-4">
      <li>
        <NuxtLink to="/" class="px-3 py-2 rounded hover:bg-amber-200 transition">Inicio</NuxtLink>
      </li>
      
      <li>
        <NuxtLink to="/contacto" class="px-3 py-2 rounded hover:bg-amber-200 transition">Contacto</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/acount" class="px-3 py-2 rounded hover:bg-amber-200 transition">acount</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/admin" class="px-3 py-2 rounded hover:bg-amber-200 transition">Admin</NuxtLink>
      </li>
    </ul>
  </nav>
      </div>
  
      <!-- Columna de contenido dinámico -->
      <div class="md:w-1/2">
        
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  