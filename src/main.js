import Vue from "vue";
import App from "./App.vue";

import "./styles/index.less";

import Framework7Vue from "framework7-vue";
import Framework7 from "framework7";

import Dialog from "framework7/components/dialog/dialog";
import LoginScreen from "framework7/components/login-screen/login-screen";
import store from "./store";

Framework7.use([Dialog, LoginScreen, Framework7Vue]);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
