import axios from 'axios';

const apiCPTEC = axios.create({
    baseURL: 'http://servicos.cptec.inpe.br/XML/'
});

export default apiCPTEC;