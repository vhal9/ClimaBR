import apiCPTEC from './apiCPTEC.service';

const cityServices = {
    listCitys: async (name) => {

        return apiCPTEC.get(`/listaCidades?city=${name}`);

    }
};

export default cityServices ;