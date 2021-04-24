import Vue from "vue";
import Vuex from "vuex";
import citysModule from './modules/citysModule';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        citysModule,
    }
});