import store from './store';
import App from './App'
import util from './untils/func.js'

import BasicContainer from './wxcomponents/basic-container/main'
import TabBar from './wxcomponents/tab-bar/main'
import { setData } from './untils/common.js'
import Toast from './wxcomponents/vant/toast/toast';
import Dialog from './wxcomponents/vant/dialog/dialog';
import Notify from './wxcomponents/vant/notify/notify';

Vue.prototype.setData = setData;
Vue.prototype.$notify = Notify;
Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;
Vue.use(util)

//注册全局容器
Vue.component('BasicContainer', BasicContainer)
Vue.component('TabBar', TabBar)

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