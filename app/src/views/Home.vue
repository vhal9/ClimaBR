/**
 * Página inicial para pesquisa de cidades
 */

// escopo do html
<template>

    <div class="Home">

        <b-container class="form-container col-sm-8" >
            <b-form-input class="col-sm-8" prepend="%" placeholder="Buscar cidade..." trim v-model='search' />
            <b-button 
                class="col-sm-2 button-search" 
                @click="searchCitys"
                :disabled="isDisabled"
            >
                Pesquisar
            </b-button>
        </b-container>

        <b-container class="result-container">
            <hr class="col-sm-7 line-divisor">
            <div v-for="item of citys" :key="item.id" class="col-sm-7">
                <a :href="'city/' + item.id">
                    <div class="card-container">
                        <div class="card-item-container">
                            <span>{{item.nome}}</span>
                            <span>{{item.uf}}</span>
                        </div>
                        <div class="card-item-container">
                            <b-icon size="small" scale="1.3" icon="arrow-right" />
                        </div>
                    </div>
                </a>
            </div>
            
            <b-card v-if="citysNotFound" overlay >
                <label class="result-empty-container">Cidade não encontrada</label>
            </b-card>
        </b-container>
        
    </div>

</template>

// escopo do Vue
<script>

import { removeAcents } from '../Utils/removeAcents';
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Home",

    computed: {
        // importa o modulo de cidades, que mapeia o array de cidades
        ...mapGetters("citysModule", ["citys"]),

        // observador para desabilitar/habilitar botão de pesquisar
        isDisabled: function(){
			return this.desabilitaBotaoPesquisar();
		},
    },

    // variaveis da página
    data() {
        return {
            search:'',
            citysNotFound: false,
        }
    },

    // escopo inicializavel com a página
    mounted(){
        this.search = '';
    },

    // métodos da página Home
    methods: {
        // importa os métodos do módulo de cidades
        ...mapActions("citysModule", ["getCitysAction"]),

        // função para buscar as cidades
        searchCitys(){
            // remove acentos da cidade buscada
            let query = removeAcents(this.search);
            
            // busca cidades 
            this.getCitysAction(query).then(() => {
                this.citysNotFound = (this.citys.length == 0);
            });
            
        },

        // função para verificar se botão deve ou não estar desabilitado
        desabilitaBotaoPesquisar(){
            if (this.search.length < 3)
                return true;
            return false;
        }
    }
}
</script>

// escopo do CSS
<style scoped>

    .Home{

        background-color: rgba(255, 255, 255, 0.349);

        border-radius: 3rem;
        padding: 15px;
        -webkit-box-shadow: 3px 5px 27px 5px rgba(0,0,0,0.78); 
        box-shadow: 3px 5px 27px 5px rgba(0,0,0,0.78);

        margin-left: 5%;
        margin-right: 5%;
        height: 100%;

    }

    label {
        margin: 0px !important;
    }

    .form-container {
        display: flex;
        flex-direction: row;
        justify-content: center;

        margin-top: 2%;
        gap:1rem;
    }

    .result-container {
        margin-top: 1%;
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 80%;
        overflow-y: scroll;
    }

    .col-sm-7{
        flex:none !important;
    } 

    .button-search{
        background-color: black;
        border: 1px solid black;
        border-radius: 5%;
    }

    .button-search:disabled {
        background-color: black;
        border: 1px solid black;
        border-radius: 5%;
    }


    .result-empty-container {
        font-weight: 800;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    a {
        text-decoration: none !important;
    }


    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-items: center;
        align-items: center;

        border: 2px solid rgba(0, 0, 0, 0.25);
        border-radius: 0.5rem;

        color: white;

    }
    .card-container:hover{
        color: white;
        background-color: rgb(0, 0, 0);
    }
    
    .card-container:first-child{
        margin-top: 1.5rem;
    }

    .card-item-container {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        margin: 2%;
    }

    .line-divisor {
        margin-bottom: 0;
        height: 0.5px;
        background-color:black;
        color: black;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(76, 76, 85);
        border-radius: 20px;
        border: 1px transparent;
    }
    
</style>