import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant'
import 'vant/lib/index.css'
import '@/assets/iconfont/iconfont.css'
Vue.use(Vant)
// 测试接口用
// import {loginApi} from "@/api"
// console.log(loginApi());

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
