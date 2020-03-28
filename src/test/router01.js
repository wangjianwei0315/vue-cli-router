import Router from 'vue-router'
const route = [
  {
    path: '/home',
    beforeRouteEnter (to, from, next) {
      if (to.path === '/device') {
        Router.push({name: 'Child'})
      } else next()
    }
  }
]
export default new Router({
  route
})
