import Vue from 'vue'
import Vuex from 'vuex'
const state = {
  assetsToken: '',
  tabbarShow: true
}
const mutations = {
  hideTabbar (state) {
    state.tabbarShow = false
  },
  showTabbar (state) {
    state.tabbarShow = true
  }
}
const actions = {}
const modules = {}
const context = require.context('../view', true, /store\.js$/)
context.keys().forEach(fileName => {
  const obj = context(fileName)
  const moduleName = fileName.split('/')[1]
  if (obj.default) modules[moduleName] = obj.default
})

Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    ...modules
  }
})
export default store
