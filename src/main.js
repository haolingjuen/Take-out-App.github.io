import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/state'
import Mint from 'mint-ui'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import BaiduMap from 'vue-baidu-map'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
Vue.prototype.$http = axios;
axios.defaults.withCredentials=true;
Vue.use(VueAwesomeSwiper, {

});
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'iy9nhTHmzBZuGHw71IRD6Iex4GVozZuV'
});
Vue.config.productionTip = false;
Vue.use(Mint);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
