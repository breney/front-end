import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store' 
import axios from "axios"

import  BootstrapVue  from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


import firebase from "firebase/app"

Vue.prototype.$axios = axios;
Vue.config.productionTip = false



var firebaseConfig = {
  apiKey: "AIzaSyAAOscUpwOrLTQ4pfmfPSEgJUEHq9-PVSQ",
  authDomain: "noovprojeto.firebaseapp.com",
  databaseURL: "https://noovprojeto.firebaseio.com",
  projectId: "noovprojeto",
  storageBucket: "noovprojeto.appspot.com",
  messagingSenderId: "809166396110",
  appId: "1:809166396110:web:5523902d41e5fdd8f24e9f",
  measurementId: "G-JXZDCLM7DX"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
