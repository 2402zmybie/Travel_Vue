// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入初始样式
import 'styles/reset.css'
import 'styles/border.css'
import fastclick from 'fastclick'
//引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
//正确使用fastClick
fastclick.attach(document.body)

//作为父子组件通信的媒介   注册全局的bus
Vue.prototype.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
