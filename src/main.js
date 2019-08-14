import Vue from 'vue'
import App from './App'
import router from './router'

//可进行按需引入
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vfilter from "./filters";

Vue.use(Element);

for(let key in vfilter) {
  Vue.filter(key, vfilter[key]);
}

//浏览器解析js兼容
import 'babel-polyfill'

//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
