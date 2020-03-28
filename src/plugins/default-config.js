import Vue from 'vue'
Vue.config.silent = true // 取消vue的所有警告和日志
Vue.config.devtools = true // 配置是否允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
// eslint-disable-next-line handle-callback-err
Vue.config.errorHandler = function (err, vm, info) {
  console.log(info)
}
const vNodes = Vue.extend({
  template: '<div>{{firstName}}</div>',
  data () {
    return {
      firstName: '为空'
    }
  }
})
// eslint-disable-next-line new-cap
new vNodes().$mount('#abc')
Vue.set({
  newProperty: 'prototype-static'
}, 'index', 'value')
Vue.observable({
  obset: true
})
const num = Number(Vue.version.split('.')[0])
if (num === 2) {
  console.log('the Vue de version is' + num + 'X')
} else if (num === 3) {
  console.log('the eslint cannot support the next line s grammar')
}
