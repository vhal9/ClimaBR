import apiCPTEC from './apiCPTEC.service';

const weatherServices = {

    listLastFourDays: async (cityId) => {

        return apiCPTEC.get(`cidade/${cityId}/previsao.xml`);

    },

    listLastSevenDays: async (cityId) => {

        return apiCPTEC.get(`cidade/7dias/${cityId}/previsao.xml`);

    }
}

export default weatherServices;