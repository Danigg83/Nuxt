export default defineNuxtRouteMiddleware((to) => {
  console.log('Global middleware path:', to.path);
  
  if (to.path === '/item/2') {
    return navigateTo('/')
  }
})
  