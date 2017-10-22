import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
import Mock from './util/mock'      //引入Mock.js
import axios from 'axios'          //vue.js交互插件

Mock.mockData();
Vue.prototype.axios = axios;

Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
