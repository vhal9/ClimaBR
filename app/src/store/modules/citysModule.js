import * as mutationTypes from "../mutation_types";
import cityServices from "../../services/city.service";
import X2JS from 'x2js';
var parseXmlToJson = new X2JS();


const state = {
    citys: []
};

const getters = {
    citys: (state) => {
        return state.citys;
    },
};


const mutations = {

    [mutationTypes.SET_STORE_CITYS] (state, data){
        var dados = parseXmlToJson.xml2js(data);
        state.citys = dados.cidades.cidade;
    },

    [mutationTypes.CLEAN_CITYS_ACTION] (state){
        state.citys = [];
    }
}

const actions = {

    getCitysAction({ commit }, nome) {
        return new Promise((resolve) => {
            cityServices.listCitys(nome).then(response =>{
                commit(mutationTypes.SET_STORE_CITYS, response.data);
                resolve();
            })
            .catch(erro => {
                console.log("houve algum problema", erro);
            })
        })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}