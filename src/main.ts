
// Компоненты Vue

// Всё, что относится к Vue
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import routes from './router';
import store from './store';
import App from './App.vue';


// components jquery
import jqueryNicescroll from 'jquery.nicescroll';
window.jqueryNicescroll = jqueryNicescroll;



// Подключение скриптов jquery

  // подключаем скролл
import './assets/js/scroll';

// Globally register all `_base`-prefixed components
import './components/_global';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// import VueSweetalert2 from 'vue-sweetalert2';

// import VueClipboard from 'vue-clipboard2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import index from '@/views/Index.vue';



// VueClipboard.config.autoSetContainer = true;


// Активация плагинов Vue
Vue.use(Vuex);
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      // component: Home
      component: () => import('./views/Main.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:8080'),
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
  // options: { path: `@/index.html`; }, // Optional options
}));

// Vue.use(VueClipboard);
// library.add(faUserSecret);
// Vue.use(VueSweetalert2);


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
