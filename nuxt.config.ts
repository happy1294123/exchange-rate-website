// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
	typescript: { typeCheck: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/eslint-module']
})