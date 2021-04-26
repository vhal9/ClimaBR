<template>

    <div class="Home">

        <b-container class="form-container col-sm-8" >
            <b-form-input class="col-sm-8" prepend="%" placeholder="Buscar cidade..." trim v-model='search' />
            <b-button 
                class="col-sm-2 button-search" 
                variant="primary" 
                @click="searchCitys"
                :disabled="isDisabled"
            >
                Pesquisar
            </b-button>
        </b-container>

        <b-container class="result-container">
            <hr class="col-sm-7 line-divisor">
            <div v-for="item of citys" :key="item.id" class="col-sm-7">
                <a href="#" >
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

<script>

import { mapGetters, mapActions } from "vuex";

export default {
    name: "Home",

    computed: {
        ...mapGetters("citysModule", ["citys"]),
        isDisabled: function(){
			return this.desabilitaBotaoPesquisar();
		},
    },

    data() {
        return {
            search:'',
            citysNotFound: false,
            isSearching: false
        }
    },
    methods: {
        ...mapActions("citysModule", ["getCitysAction"]),

        searchCitys(){
            //adicionar validações
            this.isSearching = true;
            (this.getCitysAction(this.search)).then(() => {
                this.citysNotFound = (this.citys.length == 0);
                console.log(this.citysNotFound);
            });
            
        },

        desabilitaBotaoPesquisar(){
            console.log("teste", this.search, "teste");
            if (this.search.length < 3)
                return true;
            return false;
        }
    }
}
</script>

<style scoped>

    .Home{
        margin-top: 5rem;
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

    a:hover{
        color:blue;
        
    }


    .card-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-items: center;
        align-items: center;

        border: 1px solid rgba(0, 0, 0, 0.125);
        border-radius: 0.5rem;

        color:#333;

    }
    .card-container:hover{
        color: white;
        background-color: blue;
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
    }
</style>