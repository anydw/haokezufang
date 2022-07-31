import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    redirect: '/layout/home',
    component: () => import('@/views/Layout'),
    meta: { show: true },
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        meta: { show: true },
        children: [
          {
            path: 'city',
            component: () => import('@/views/Home/City'),
            meta: { show: false }
          }
        ]
      },
      {
        path: 'search',
        component: () => import('@/views/Search'),
        meta: { show: true }
      },
      {
        path: 'my',
        component: () => import('@/views/My'),
        meta: { show: true }
      },
      {
        path: 'consult',
        component: () => import('@/views/Consult'),
        meta: { show: true }
      },
      {
        path: '/login',
        component: () => import('@/views/My/login')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
