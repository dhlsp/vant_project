import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App';
import router from './router';
import store from './store';
import './assets/icon/iconfont/index.css';
import './components/index'; // 注册自定义全局组件

Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
