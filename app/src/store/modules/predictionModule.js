import * as mutationTypes from "../mutation_types";
import predictionServices from "../../services/prediction.service";
import X2JS from 'x2js';
var parseXmlToJson = new X2JS();

const state = {
    city: {
        nome:'',
        uf: '',
        atualizacao: ''
    },
    predictions: []
};

const getters = {
    city: (state) => {
        return state.city;
    },
    predictions: (state) => {
        return state.predictions;
    }
};

const mutations = {

    [mutationTypes.SET_STORE_CITY] (state, city){
        state.city.nome = city.nome;
        state.city.uf = city.uf;
        state.city.atualizacao = city.atualizacao;
        
    },

    [mutationTypes.CLEAN_CITY_ACTION] (state){
        state.city = null
    },
    [mutationTypes.SET_STORE_PREDICTION] (state, predictions){
        state.predictions = predictions;
    },

    [mutationTypes.CLEAN_PREDICTION_ACTION] (state){
        state.predictions = []
    }
}

const actions = {

    getPredictions({commit}, idCity) {
        return new Promise((resolve) => {
            predictionServices.listLastFourDays(idCity).then(response =>{
                var dados = parseXmlToJson.xml2js(response.data);
                commit(mutationTypes.SET_STORE_CITY, dados.cidade);
                commit(mutationTypes.SET_STORE_PREDICTION, dados.cidade.previsao);
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