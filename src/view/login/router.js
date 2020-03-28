import routerMeta from '@/router/routerMeta'
const Login = () => import('./index')
export default [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      ...routerMeta(false),
      keepAlive: false
    }
  }
]
