import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LandingPage from './components/LandingPage.vue'
import PropertiesPage from './components/PropertiesPage.vue'

// Define custom route meta types
declare module 'vue-router' {
  interface RouteMeta {
    title?: string  // Explicitly type the title property
  }
}

const router = createRouter({
  history: createWebHistory('/realtor-temp/'),
  routes: [
    { 
      path: '/', 
      component: LandingPage,
      name: 'Home',
      meta: { title: 'Home | Yonna Realty' }  // Now properly typed
    },
    { 
      path: '/properties', 
      component: PropertiesPage,
      name: 'Properties',
      meta: { title: 'Properties | Yonna Realty' }  // Now properly typed
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

// Type-safe title assignment
router.afterEach((to) => {
  document.title = to.meta.title || 'Yonna Realty'  // No more type error
})

const app = createApp(App)
app.use(router)
app.mount('#app')