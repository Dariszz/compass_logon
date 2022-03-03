import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '@/views/loginPage/index.vue'
import homePage from '@/views/homePage/index.vue'
import page401 from '@/views/page401/index.vue'
import page404 from '@/views/page404/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: loginPage,
  },

  {
    path: '/home',
    name: 'page401',
    component: page401,
  },

  {
    path: '*',
    name: 'page404',
    component: page404,
  },
  
  {
    path: '/home',
    name: 'Home',
    component: homePage,
  },

  {
    path: '/',
    redirect: '/login',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
