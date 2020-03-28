const pluginTest = {}
pluginTest.install = function (Vue, options) {
  Vue.globalMethod = function (e) {
    if (typeof e === 'string' || e instanceof String) {
      console.log(e.length)
    }
  }
  Vue.mixins({
    created () {
      console.log(options)
    }
  })
}
export default pluginTest
