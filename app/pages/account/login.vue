<template>
  <div class="flex items-center justify-center bg-gray-100 py-5">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

      <form @submit.prevent="loginUser" class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          required
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <button
          type="submit"
          class="bg-lime-500 text-white p-3 rounded hover:bg-lime-600 transition"
        >
          Entrar
        </button>

        <p v-if="error" class="text-red-500">{{ error }}</p>
      </form>
      <p class="mt-4 text-center">
        ¿No tienes cuenta?
        <NuxtLink to="/account/register" class="text-lime-500 font-semibold">Registrarse</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSupabase } from '~/composables/useSupabase'
import { useRouter } from 'vue-router'
import { useFlashStore } from '~/stores/flash'

const supabase = useSupabase()
const router = useRouter()
const flash = useFlashStore()

const email = ref('')
const password = ref('')
const error = ref('')

const loginUser = async () => {
  error.value = ''

  const { data, error: loginError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (loginError) {
    error.value = 'Email o contraseña incorrectos ❌'
    flash.addMessage(error.value, 'error')
  } else {
    flash.addMessage('Bienvenido ✅', 'success')
    router.push('/admin')
  }
}

definePageMeta({
  middleware: 'auth-supabase'
})
</script>
