// middleware/global.ts
import { useFlashStore } from '~/stores/flash'

export default defineNuxtRouteMiddleware((to) => {
  console.log('Global middleware path:', to.path);
  const flash = useFlashStore()

  if (to.path === '/item/2') {
    /* flash.addMessage('Operación correcta ✅', 'success')
    flash.addMessage('Ha ocurrido un error ❌', 'error')
    flash.addMessage('Cuidado ⚠️', 'warning') */
    flash.addMessage('No puedes acceder al item 2, redirigido al inicio 🚀', 'warning')

    return navigateTo('/')
  }

 
})
  