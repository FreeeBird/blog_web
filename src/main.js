import Vue from 'vue'
import App from './App.vue'
import vuetify from "@/plugins/vuetify";
import VueRouter from "vue-router";
import router from "@/plugins/router";
import moment from "moment";
import VuetifyToast from "vuetify-toast-snackbar";
import toastConfig from "@/plugins/snackbarConfig";

Vue.config.productionTip = false

//路由
Vue.use(VueRouter)
// vuetify-toast
Vue.use(VuetifyToast,toastConfig)

Vue.filter('dateFmt',(input,formatString = "YYYY-MM-DD")=>{
  return moment(input).format(formatString)
})


new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
