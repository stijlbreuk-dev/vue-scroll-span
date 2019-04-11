import Vue from 'vue';
import VueScrollSpan from '../src/wrapper';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueScrollSpan);

new Vue({
  render: h => h(App)
}).$mount('#app');
