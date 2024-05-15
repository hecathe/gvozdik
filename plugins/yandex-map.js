import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'


const settings = {
  apiKey: '3298e558-aff8-4488-95dc-510505f05ade', // Индивидуальный ключ API
  // lang: 'ru_RU', // Используемый язык
  // coordorder: 'latlong', // Порядок задания географических координат
  // debug: false, // Режим отладки
  // version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings)
});