/**
 * Modulo de cidade, para manter os dados de cidade
 */

import * as mutationTypes from "../mutation_types";
import cityServices from "../../services/city.service";
import X2JS from 'x2js';
var parseXmlToJson = new X2JS();

// array de cidade 
const state = {
    citys: []
};

// getters de cidades
const getters = {
    citys: (state) => {
        return state.citys;
    },
};

// mutations - similar aos metodos SET
const mutations = {

    [mutationTypes.SET_STORE_CITYS] (state, citys){
        state.citys = citys;
    },

    [mutationTypes.CLEAN_CITYS_ACTION] (state){
        state.citys = [];
    }
}

// Camada de funções para o módulo de cidades
const actions = {

    // função para buscar as informações de cidades
    getCitysAction({ commit }, nome) {
        return new Promise((resolve) => {
            cityServices.listCitys(nome).then(response =>{
                // transforma o retorno no formato xml para json
                var citysFound = parseXmlToJson.xml2js(response.data).cidades.cidade;
                if (citysFound) {
                    if (!Array.isArray(citysFound)) {
                        citysFound = [citysFound];
                    }
                    commit(mutationTypes.SET_STORE_CITYS, citysFound);
                } else {
                    commit(mutationTypes.CLEAN_CITYS_ACTION);
                }
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