import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import store from '../store'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      showTabbar: true
    }
  }
]
const context = require.context('../view', true, /router\.js$/)
context.keys().forEach(fileName => {
  const obj = context(fileName)
  if (obj.default) routes.push(...obj.default)
})

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 })
      }, 0)
    })
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.showTabbar) store.commit('showTabbar')
  else store.commit('hideTabbar')
  next()
})
export default router
