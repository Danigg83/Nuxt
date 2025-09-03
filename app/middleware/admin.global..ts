// app/middleware/admin.global.ts
export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes('/admin')) {
    // por ejemplo, chequear auth
    //const user = useSupabaseUser()
    //if (!user.value) return navigateTo('/login')
  }
})
