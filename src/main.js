import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入vant
import Vant from 'vant'
// 导入vant样式
import 'vant/lib/index.css'

// 注册vant,可知vant十个插件，里面包含很多组件，是组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
