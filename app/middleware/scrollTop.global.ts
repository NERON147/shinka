export default defineNuxtRouteMiddleware((_to, _from) => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
})
