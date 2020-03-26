import Vue from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";
import router from "@/plugins/router";
import registrySnack from "@/components/snackbar/index";

Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(registrySnack)
new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
