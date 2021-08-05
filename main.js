import Vue from 'vue'
import App from './App'

// 此处导入自定义封装的网络请求
import { myRequest } from './utils/api.js'
Vue.prototype.$myRequest = myRequest

import BASE_URL from './utils/api.js'
Vue.prototype.$BASE_URL = BASE_URL


// 此处为引用自定义顶部
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom);
import TnCustom from './components/TnCustom/TnCustom.vue'
Vue.component('tn-custom', TnCustom)

// 引入:uView-UI
import uView from 'uview-ui';
Vue.use(uView);

// tip
import tip from'./utils/tip.js'
Vue.prototype.$tip=tip;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
