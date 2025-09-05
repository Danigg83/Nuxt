// middleware/auth-client.ts
import { useAuth } from '~/composables/useAuth'
import { useRouter } from 'vue-router'

export default defineNuxtRouteMiddleware((to) => {
  if (!process.client) return  // evita SSR

  const { user } = useAuth()
  const router = useRouter()

  if ((to.path === '/account/login' || to.path === '/account/register') && user.value) {
    router.push('/admin')
  }

  if ((to.path.startsWith('/admin') ||
       to.path.startsWith('/admin/account/profile') ||
       to.path.startsWith('/admin/account/settings')) && !user.value) {
    router.push('/account/login')
  }
})
