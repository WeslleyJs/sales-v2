import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    compoent: () => import (/*webpackChunkName: "sobre" */ '../components/Sobre.vue')
  }


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
