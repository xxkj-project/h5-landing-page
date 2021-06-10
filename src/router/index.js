import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 鱼多多下载页/注册页
const dlRegRouter = [
  // 鱼多多下载落地页
  {
    path: '/fishLot',
    name: 'FishLot',
    component: () => import(/* webpackChunkName: 'fishLot' */ '@/views/fishLot'),
    meta: {
      title: '鱼多多下载页'
    }
  },
  // 鱼多多注册页
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: 'register' */ '@/views/register'),
    meta: {
      title: '注册'
    }
  }
]

// 鱼多多说明文档
const explainRouter = [
  {
    path: '/privacyPolicy',
    name: 'PrivacyPolicy',
    component: () => import(/* webpackChunkName: 'privacyPolicy' */ '@/views/explain/privacyPolicy'),
    meta: {
      title: '隐私政策'
    }
  },
  {
    path: '/platformIntroduce',
    name: 'PlatformIntroduce',
    component: () => import(/* webpackChunkName: 'platformIntroduce' */ '@/views/explain/platformIntroduce'),
    meta: {
      title: '平台简介'
    }
  },
  {
    path: '/platformConventions',
    name: 'PlatformConventions',
    component: () => import(/* webpackChunkName: 'platformConventions' */ '@/views/explain/platformConventions'),
    meta: {
      title: '平台公约'
    }
  },
  {
    path: '/agreements',
    name: 'Agreements',
    component: () => import(/* webpackChunkName: 'agreements' */ '@/views/explain/agreements'),
    meta: {
      title: '服务协议'
    }
  },
  {
    path: '/legalNotice',
    name: 'legalNotice',
    component: () => import(/* webpackChunkName: 'legalNotice' */ '@/views/explain/legalNotice'),
    meta: {
      title: '法律申明'
    }
  }
]

const routes = [...dlRegRouter, ...explainRouter]

// console.log('-baseUrl-', process.env.BASE_URL)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
