import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  {
    path: '/analises',
    name: 'analycs',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Analise.vue')
  },
  {
    path: '/teste',
    name: 'teste',
    component: () => import(/* webpackChunkName: "about" */ '../components/analises/Animation.vue')
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
