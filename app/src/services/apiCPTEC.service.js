import axios from 'axios';

/**
 * Serviço de API do CPTEC para informações sobre o clima no Brasil
 */
const apiCPTEC = axios.create({
    baseURL: 'http://servicos.cptec.inpe.br/XML/'
});

export default apiCPTEC;