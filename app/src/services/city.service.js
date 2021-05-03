import apiCPTEC from './apiCPTEC.service';

/**
 * Serviço para buscar dados das cidades
 */
const cityServices = {
    /**
     * Função para buscar cidades
     * @param {String} name 
     * @returns Array <Object> 
     */
    listCitys: async (name) => {

        return apiCPTEC.get(`/listaCidades?city=${name}`);

    }
};

export default cityServices ;