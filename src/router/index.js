import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

import Home from '../views/Home.vue'
import LoggedScreen from '../views/LoggedScreen.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logged',
    name: 'LoggedScreen',
    component: LoggedScreen,
    meta: {
      needsAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const { getUser, teste } = store

  if(to.meta.needsAuth && !getUser.isAuth) next('/')
  else next()
})

export default router