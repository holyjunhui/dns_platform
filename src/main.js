import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 全局引入element的css
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './permission'

import '@/styles/index.scss'
import '@/icons' // icon

Vue.use(ElementUI)

// Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
