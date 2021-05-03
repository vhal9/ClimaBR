import apiCPTEC from './apiCPTEC.service';

/**
 * Serviço para buscar dados do clima
 */
const predictionServices = {

    /**
     * Serviço para retornar previsão dos próximos 4 dias de uma cidade
     * @param {Number} cityId 
     * @returns {String} no formato XML
     */
    listLastFourDays: async (cityId) => {
        
        return apiCPTEC.get(`cidade/${cityId}/previsao.xml`);

    },

    /**
     * Serviço para retornar previsão dos próximos 7 dias de uma cidade
     * @param {Number} cityId 
     * @returns {String} no formato XML
     */
    listLastSevenDays: async (cityId) => {

        return apiCPTEC.get(`cidade/7dias/${cityId}/previsao.xml`);

    }
}

export default predictionServices;