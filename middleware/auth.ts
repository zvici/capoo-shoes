export default defineNuxtRouteMiddleware((_to, _from) => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return navigateTo("/login");
  }
});
