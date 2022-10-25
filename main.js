import store from './store';
import App from './App'
import util from './untils/func.js'

import BasicContainer from './wxcomponents/basic-container/main'

Vue.use(util)

//注册全局容器
Vue.component('BasicContainer', BasicContainer)

// #ifndef VUE3
import Vue from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
		store
  }
}
// #endif