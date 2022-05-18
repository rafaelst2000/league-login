import { createRouter, createWebHistory } from 'vue-router'
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
    component: LoggedScreen
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router