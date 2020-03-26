// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import FastClick from "fastclick"; //click延迟
import "babel-polyfill"; //解决某些手机没有es6特性
import "@/style/reset.css";
//import "@/utils/rem.js";
import axios from "axios";
import VueWechatTitle from "vue-wechat-title"; //标题
Vue.prototype.$http = axios;

// 弹出框显示后调用afterOpen，关闭弹出框前调用beforeClose
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
