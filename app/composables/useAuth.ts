import { useSupabase } from '~/composables/useSupabase'
import { ref, onMounted } from 'vue'

export const useAuth = () => {
  const supabase = useSupabase()
  const user = ref<any>(null)

  onMounted(async () => {
    const { data } = await supabase.auth.getUser()
    user.value = data.user || null

    // Suscribirse a cambios de sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      user.value = session?.user || null
    })
  })

  return { user }
}
