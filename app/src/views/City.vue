/**
 * Página para apresentar os dados da cidade e do clima
 */

// escopo do html
<template>

    <div id="weather-box">

        <b-container id="weather-panel">

            <div class="dados" v-if="done">
                <b-row class="city">
                    {{formatedCity.nome + ' - ' + formatedCity.uf}}
                    <div class="lastAtt">
                        {{formatedCity.atualizacao}}
                    </div>
                </b-row>

                <MainCard 
                    :description="predictions[0].info.description"
                    :dia="predictions[0].dia"
                    :diaSemana="predictions[0].diaSemana"
                    :weatherIcon="'../../images/' + predictions[0].info.icon + '.png'"
                    :label="predictions[0].info.label"
                    :maxima="predictions[0].minima"
                    :minima="predictions[0].maxima"/>
                
                <div class="dailyCards">
                    <DailyCard 
                        v-for="(day, index) in predictions" 
                        :key="index"
                        :diaSemana="day.diaSemana"
                        :dia="day.dia"
                        :label="day.info.label"
                        :maxima="day.maxima"
                        :minima="day.minima"
                        :weatherIcon="'../../images/' + day.info.icon + '.png'"
                        />
                </div>

            

            </div>
            
            <div class="dados" v-if="!done">
                CARREGANDO
            </div>

        </b-container>

    </div>

</template>

//escopo do Vue
<script>

    import moment from 'moment';
    import { getLabelOption } from '../Utils/weatherHelper';
    import { mapGetters, mapActions } from "vuex";
    import MainCard from '../components/cityWeather/MainCard.vue';
    import DailyCard from '../components/cityWeather/DailyCard.vue';

    export default {

        // declara os componentes importados
        components: { MainCard, DailyCard },

        name: "Home",

        computed: {
            // importa o modulo de previsões, que mapeia o objeto de cidade e o array de previsões
            ...mapGetters("predictionModule", ["predictions", "city"]),
        },
        
        // declara variaveis da página de informações da cidade e previsões
        data: () => ({

            id: '',

            done: false,

            formatedCity: {
                uf: '',
                atualizacao: '',
                nome: '',
            },

            formatedPrediction:{}

        }),

        // escopo inicializavel com a página
        mounted(){
            this.id = this.$route.params.id
            this.getCityWeather(this.id);
        },

        methods: {

            ...mapActions("predictionModule", ["getPredictions"]),

            // buscar dados das previsões e da cidade
            getCityWeather(id) {
                (this.getPredictions(id)).then( () => {
                    this.formatCity();
                    this.done = true;
                });
            },

            // função para formatar os dados de cidade e previsão
            formatCity() {
                this.formatedCity.nome = this.city.nome;
                this.formatedCity.uf = this.city.uf;
                this.formatedCity.atualizacao = this.city.atualizacao;
                this.formatedPrediction = this.predictions;

                moment.locale('pt');
                this.formatedCity.atualizacao = moment(this.city.atualizacao, 'YYYY-MM-DD').format('LLLL');
                this.formatedPrediction.map( t => {
                    t.diaSemana = moment(t.dia, 'YYYY-MM-DD').format('llll').split(',')[0];
                    t.dia = moment(t.dia, 'YYYY-MM-DD').format('L');
                    t.info = getLabelOption(t.tempo);
                })
                
            }
        }

    }
</script>

// escopo do CSS
<style scoped>
    #weather-panel{
        background-color: rgba(166, 200, 238, 0.349);

        border-radius: 30px;
        padding: 15px;
        max-width: 100vh;
        -webkit-box-shadow: 3px 5px 27px 5px rgba(0,0,0,0.78); 
        box-shadow: 3px 5px 27px 5px rgba(243, 237, 237, 0.63);

        height: 90vh;
        overflow-y: scroll;

    }

    #weather-box {
        height: 90%;
             
    }



    .dailyCards{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .city{
        padding: 15px;
        display: flex;
        margin: 0px !important;
        padding-bottom: 0px;

        font-size: 40px;
        font-weight: bolder;
        flex-direction: column;
        align-items: flex-end;

        
    }
    .lastAtt{
        font-size: 10px;
        font-weight: lighter;
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

<style >
    .row{
        margin: 0px !important;   
    }
</style>