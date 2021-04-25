import apiCPTEC from './apiCPTEC.service';

const predictionServices = {

    listLastFourDays: async (cityId) => {
        
        return apiCPTEC.get(`cidade/${cityId}/previsao.xml`);

    },

    listLastSevenDays: async (cityId) => {

        return apiCPTEC.get(`cidade/7dias/${cityId}/previsao.xml`);

    }
}

export default predictionServices;