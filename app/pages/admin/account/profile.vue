<template>
  <div class="p-6 max-w-lg mx-auto bg-white rounded shadow mt-6">
    <h1 class="text-2xl font-bold mb-4">Mi perfil</h1>

    <div class="flex flex-col gap-2">
      <p><strong>Email:</strong> {{ user?.email || 'Sin email' }}</p>
      <p><strong>Nombre:</strong> {{ user?.user_metadata?.full_name || 'Sin nombre' }}</p>
      <p><strong>Teléfono:</strong> {{ user?.user_metadata?.phone || 'Sin teléfono' }}</p>
    </div>

    <div class="flex flex-col gap-2 mt-4">
      <button @click="goToSettings" class="bg-lime-500 text-white px-4 py-2 rounded hover:bg-lime-600 transition">
        Editar perfil
      </button>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSupabase } from '~/composables/useSupabase'
import { useFlashStore } from '~/stores/flash'

const supabase = useSupabase()
const router = useRouter()
const flash = useFlashStore()

const user = ref<any>(null)

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user
  if (!user.value) {
    flash.addMessage('Debes iniciar sesión ❌', 'error')
    router.push('/account/login')
  }
})

const goToSettings = () => router.push('/admin/account/settings')

const logout = async () => {
  await supabase.auth.signOut()
  flash.addMessage('Sesión cerrada ✅', 'success')
  router.push('/account/login')
}

definePageMeta({
  layout: 'admin'
})
</script>

<style scoped>
body {
  font-family: sans-serif;
}
</style>
