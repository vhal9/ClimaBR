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

    [mutationTypes.SET_STORE_CITYS] (state, citys){
        state.citys = citys;
    },

    [mutationTypes.CLEAN_CITYS_ACTION] (state){
        state.citys = [];
    }
}

const actions = {

    getCitysAction({ commit }, nome) {
        return new Promise((resolve) => {
            cityServices.listCitys(nome).then(response =>{
                
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