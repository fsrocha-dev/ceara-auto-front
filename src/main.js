import 'font-awesome/css/font-awesome.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'

import App from './App'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')