import 'babel-polyfill';

// import init from 'Js/helpers/init';


// Обычные модули JS


// Компоненты Vue
// import Blog from 'Js/vue/Blog';

// Всё, что относится к Vue
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from 'Js/vue/Blog';
// import store from './store';
import VModal from 'vue-js-modal';
import VueSocketIO from 'vue-socket.io';


// Активация плагинов Vue
Vue.use(Vuex);
Vue.use(VModal);
Vue.use(VueRouter);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}));

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  VueRouter,
  store: store,
  sockets: {
    connect: function () {
      console.log('Сися connected')
    },
    customEmit: function (data) {
      console.log('Титя this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },

  methods: {
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit('emit_method', data)
    }
  },
  render: h => h(App)
}).$mount('#app');
/*
$(() => {
  // Блог
  init('.js-blog', Blog, 'vue');
});
*/
