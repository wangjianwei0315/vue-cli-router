import routerMeta from '@/router/routerMeta'
const MyVideo = () => import('./index')
const Mixins = () => import('./mixins-01')
export default [
  {
    path: '/video',
    name: 'MyVideo',
    component: MyVideo,
    meta: {
      keepAlive: false,
      ...routerMeta()
    }
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: Mixins,
    meta: {
      keepAlive: false,
      ...routerMeta()
    }
  }
]
