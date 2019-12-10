// 全局安装自定义组件
import Vue from 'vue';
import messageError from './messageError';
import countDown from './countDown';

Vue.component(messageError.name, messageError); // 提示
Vue.component(countDown.name, countDown); // 倒计时
