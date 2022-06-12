import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.css'
import echarts from './plugins/echarts'
import '../node_modules/echarts/map/js/world'
import 'default-passive-events'
import 'swiper/css/swiper.css'

Vue.use(echarts)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
