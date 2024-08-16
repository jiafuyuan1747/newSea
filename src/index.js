import Vue from 'vue'
import App from './app.vue'

const wokooApp = document.createElement('div')
wokooApp.id = 'wokooApp-jx3-sel-13410'
document.body.appendChild(wokooApp)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
const vm = new Vue({
  el: wokooApp,
  render: (h) => h(App),
})
