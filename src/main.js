// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
// import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
// 引入videojs
import VideoJs from 'video.js'
import 'video.js/dist/video-js.css'
// 引入vux的组件
import './components/index'

import './assets/csss/index.styl'
import 'animate.css'

Vue.prototype.$video = VideoJs
const FastClick = require('fastclick')
FastClick.attach(document.body)
Vue.use(VueI18n)
Vue.use(ElementUi)
locale.use(zhLocale)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/lang/zh.json'),
    'en': require('@/assets/lang/en.json')
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
