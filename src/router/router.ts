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
  },
  {
    path:'/:catchAll(.*)',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../components/Error.vue')
},
{
  path:'/error',
  name: 'error',
  component: () => import(/* webpackChunkName: "error" */ '../components/Error.vue')
},

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
