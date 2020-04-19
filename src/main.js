import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fontawesome from './plugins/vue-fontawesome'
import Modal from './plugins/modal'

Vue.use(Modal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  fontawesome,
  render: h => h(App)
}).$mount('#app')
