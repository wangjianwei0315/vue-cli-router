import RouterMeta from '@/router/routerMeta'
import Search from './index'
const routes = [
  {
    path: '/search',
    component: Search,
    name: 'Search',
    meta: {
      ...RouterMeta(),
      keepAlive: false
    }
  }
]
export default routes
