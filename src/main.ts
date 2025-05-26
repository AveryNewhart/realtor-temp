import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LandingPage from './components/LandingPage.vue'
import PropertiesPage from './components/PropertiesPage.vue'

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: LandingPage,
      name: 'Home'
    },
    { 
      path: '/properties', 
      component: PropertiesPage,
      name: 'Properties'
    },
    // Catch-all route for 404s
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
