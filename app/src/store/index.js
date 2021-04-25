import Vue from "vue";
import Vuex from "vuex";
import citysModule from './modules/citysModule';
import predictionModule from './modules/predictionModule';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        citysModule,
        predictionModule,
    }
});