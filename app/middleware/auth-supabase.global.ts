// middleware/auth-supabase.global.ts
import { useSupabase } from '~/composables/useSupabase'

export default defineNuxtRouteMiddleware(async (to) => {
  // Solo en cliente
  if (!process.client) return

  const supabase = useSupabase()
  const { data: { session } } = await supabase.auth.getSession()
  const flash = useFlashStore()

  //console.log('Auth-Supabase Global middleware path:', to.path, ' | Session:', session)

  // Si intenta acceder a register/login estando logueado → redirige a /admin
  if ((to.path === '/account/register' || to.path === '/account/login') && session) {
    return navigateTo('/admin')
  }

  // Si intenta acceder a /admin o perfil/settings sin sesión → redirige a login
  if ((to.path.startsWith('/admin') ||
       to.path.startsWith('/account/profile') ||
       to.path.startsWith('/account/settings')) && !session) {

        flash.addMessage('Usuario no registrado', 'error')
    return navigateTo('/account/login')
  }

  // Si no se cumple nada → deja pasar
})
