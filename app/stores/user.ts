import { defineStore } from 'pinia'
import { useSupabase } from '~/composables/useSupabase'

export const useUserStore = defineStore('user', {
  state: () => ({
    session: null as any,
    user: null as any
  }),
  actions: {
    async init() {
      const supabase = useSupabase()

      // Obtener la sesión inicial
      const { data } = await supabase.auth.getSession()
      this.session = data.session
      this.user = data.session?.user || null

      // Suscribirse a cambios de sesión (login/logout)
      supabase.auth.onAuthStateChange((_event, session) => {
        this.session = session
        this.user = session?.user || null
      })
    },
    async logout() {
      const supabase = useSupabase()
      await supabase.auth.signOut()
      this.session = null
      this.user = null
    }
  }
})
