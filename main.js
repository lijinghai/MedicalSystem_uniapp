import Vue from 'vue'
import App from './App'
import { myRequest } from './utils/api.js'
import './static/font/iconfont.css'

Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
