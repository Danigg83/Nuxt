<template>
  <div class="p-6 max-w-lg mx-auto">
    <h1 class="text-2xl font-bold mb-4">Editar perfil</h1>

    <form @submit.prevent="updateProfile" class="flex flex-col gap-4">
      <input v-model="fullName" placeholder="Nombre completo" class="border p-2 rounded" />
      <input v-model="phone" placeholder="Teléfono" class="border p-2 rounded" />

      <input v-model="newPassword" type="password" placeholder="Nueva contraseña" class="border p-2 rounded" />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" class="border p-2 rounded" />

      <button type="submit" class="bg-lime-500 text-white px-4 py-2 rounded">Guardar cambios</button>
    </form>

    <p v-if="message" class="text-green-500 mt-2">{{ message }}</p>
    <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useSupabase } from '~/composables/useSupabase'
import { ref, onMounted } from 'vue'

const supabase = useSupabase()
const fullName = ref('')
const phone = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const message = ref('')
const error = ref('')
const user = ref<any>(null)

onMounted(async () => {
  const { data } = await supabase.auth.getUser()
  user.value = data.user
  fullName.value = user.value?.user_metadata?.full_name || ''
  phone.value = user.value?.user_metadata?.phone || ''
})

const updateProfile = async () => {
  message.value = ''
  error.value = ''

  // Validar contraseña solo si se ha rellenado
  if (newPassword.value || confirmPassword.value) {
    if (newPassword.value !== confirmPassword.value) {
      error.value = 'Las contraseñas no coinciden ❌'
      return
    }
    if (newPassword.value.length < 6) {
      error.value = 'La contraseña debe tener al menos 6 caracteres ❌'
      return
    }
  }

  // Preparar objeto con los datos a actualizar
  const updates: any = {}
  if (fullName.value) updates.full_name = fullName.value
  if (phone.value) updates.phone = phone.value
  if (newPassword.value) updates.password = newPassword.value

  const { error: metaError } = await supabase.auth.updateUser({
    data: updates
  })

  if (metaError) {
    error.value = metaError.message
  } else {
    message.value = 'Perfil actualizado correctamente ✅'
  }

  // Limpiar campos de contraseña
  newPassword.value = ''
  confirmPassword.value = ''
}

definePageMeta({
  layout: 'admin'
})
</script>
