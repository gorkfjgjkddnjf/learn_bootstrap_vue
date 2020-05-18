import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/main.sass'

Vue.config.productionTip = false
Vue.use (BootstrapVue)
Vue.use (BootstrapVueIcons)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
