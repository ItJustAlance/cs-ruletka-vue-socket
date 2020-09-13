import Vue from 'vue';
import Vuex from 'vuex';
import ItemsUser from './modules/ItemsUser';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ItemsUser
    }
})
