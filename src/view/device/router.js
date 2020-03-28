import routerMeta from '@/router/routerMeta'
const Device = () => import('./index')
const Child = () => import('./child')
export default [
  {
    path: '/device',
    name: 'Device',
    component: Device,
    meta: {
      ...routerMeta(),
      keepAlive: false
    }
  },
  {
    path: '/child',
    name: 'Child',
    component: Child,
    meta: {
      ...routerMeta(),
      keepAlive: false
    }
  }
]
