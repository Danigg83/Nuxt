<template>
  <div class="flex items-center justify-center bg-gray-100 py-5">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Registro de usuario</h2>

      <form @submit.prevent="registerUser" class="flex flex-col gap-4">
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
          placeholder="Contraseña (mín 6 caracteres)"
          required
          class="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-lime-500"
        />
        <button
          type="submit"
          class="bg-lime-500 text-white p-3 rounded hover:bg-lime-600 transition"
        >
          Registrar
        </button>

        <p v-if="error" class="text-red-500">{{ error }}</p>
        <p v-if="success" class="text-green-500">{{ success }}</p>
      </form>
      <p class="mt-4 text-center">
        ¿Ya tienes cuenta?
        <NuxtLink to="/account/login" class="text-lime-500 font-semibold">Iniciar sesión</NuxtLink>
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
const success = ref('')

const registerUser = async () => {
  error.value = ''
  success.value = ''

  if (password.value.length < 6) {
    error.value = 'La contraseña debe tener al menos 6 caracteres ❌'
    return
  }

  const { data, error: err } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (err) {
    if (err.message.includes('already registered')) {
      error.value = 'Este email ya está registrado. Ve a login para iniciar sesión.'
      flash.addMessage(error.value, 'error')
    } else {
      error.value = err.message
    }
  } else {
    console.log(1);
    
    success.value = 'Usuario registrado correctamente. Revisa tu email para verificar la cuenta ✅'
    //flash.addMessage('Registro exitoso ✅', 'success')
    setTimeout(() => router.push('/account/login'), 3500)
  }
}

definePageMeta({
  middleware: 'auth-supabase'
})
</script>
