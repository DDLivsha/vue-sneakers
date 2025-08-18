import { createApp } from 'vue'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
   {
      path: '/', component: () => import('./pages/Home.vue')
   },
   {
      path: '/favorites/:id', component: () => import('./pages/Favorites.vue')
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes

})
const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)

app.mount('#app')
