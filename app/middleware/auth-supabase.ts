// middleware/auth.ts
import { useSupabase } from '~/composables/useSupabase'
// import { useFlashStore } from '~/stores/flash'

export default defineNuxtRouteMiddleware(async (to) => {
  const supabase = useSupabase()
  const flash = useFlashStore()
//console.log('Auth middleware path:', to.path);

  // Obtener sesión actual
  const { data: { session } } = await supabase.auth.getSession()

  // Si intenta acceder a register o login y ya está logueado
  /* if ((to.path === '/account/register' || to.path === '/account/login') && session) {
    flash.addMessage('Ya estás logueado, redirigiendo a admin ✅', 'warning')
    return navigateTo('/admin')
  }
 */
  // Si intenta acceder a /admin y NO está logueado
  /* if (to.path.startsWith('/admin') && !session) {
    flash.addMessage('Debes iniciar sesión para acceder a admin ❌', 'error')
    return navigateTo('/account/login')
  } */

  // Si no se cumple ninguna condición, deja pasar
})
