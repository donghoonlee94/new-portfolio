import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import store from './store/index';
import router from './routes/index';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
	render: h => h(App),
	store,
	router,
}).$mount('#app');
