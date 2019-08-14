import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 引入虚拟列表
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

// import {VirtualScroller} from 'vue-virtual-scroller'


// 全局引入element的css
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import './permission'

import '@/styles/index.scss'
import '@/icons' // icon

Vue.use(ElementUI)
Vue.use(VueVirtualScroller)
// Vue.component('virtual-scroller', VirtualScroller)
// Vue.config.productionTip = false
console.log("VirtualScroller", VueVirtualScroller)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
