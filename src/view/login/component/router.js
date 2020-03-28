import routerMeta from '@/router/routerMeta'
const Table = () => import('./table')
export default [
  {
    path: '/login/table',
    name: 'LoginTable',
    component: Table,
    meta: {
      ...routerMeta(),
      keepAlive: true
    }
  }
]
