import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // user: null // 初始值为一个空值，只有在用户登录成功之后才能获取到
    // user: JSON.parse(localStorage.getItem('ZUFANG_USER'))
    user: getToken() || ''
  },
  getters: {
  },
  mutations: {
    STE_TOKEN (state, payload) { // 第一个参数是固定规则，第二个是一个参数
      state.user = payload // 让state的user等于payload
      // localStorage.setItem('ZUFANG_USER', JSON.stringify(state.user)) // 本地存储只能存储字符串，需要转成json格式
      setToken(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
