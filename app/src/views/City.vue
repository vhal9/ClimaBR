<template>

    <b-container id="weather-panel">

        <div v-if="done">
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
                    :maxima="day.maxima"
                    :minima="day.minima"
                    :weatherIcon="'../../images/' + day.info.icon + '.png'"
                    />
            </div>

           

        </div>
        <div v-if="!done">
            CARREGANDO
        </div>

    </b-container>

</template>

<script>

    import moment from 'moment';
    import { getLabelOption } from '../Utils/weatherHelper';
    import { mapGetters, mapActions } from "vuex";
    import MainCard from '../components/cityWeather/MainCard.vue';
    import DailyCard from '../components/cityWeather/DailyCard.vue';

    export default {

        components: { MainCard, DailyCard },

        name: "Home",

        computed: {
            ...mapGetters("predictionModule", ["predictions", "city"]),
        },
        
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

        mounted(){

            var url_string = window.location.href; 
            var url = new URL(url_string); 
            this.id = url.pathname.split('/')[2];
            
            this.getCityWeather(this.id);
        },

        methods: {

            ...mapActions("predictionModule", ["getPredictions"]),


            getCityWeather(id) {
                

                (this.getPredictions(id)).then( () => {
                    this.formatCity();
                    this.done = true;
                });
            },

            formatCity() {
                this.formatedCity.nome = this.city.nome;
                this.formatedCity.uf = this.city.uf;
                this.formatedCity.atualizacao = this.city.atualizacao;
                this.formatedPrediction = this.predictions;

                moment.locale('pt');
                this.formatedCity.atualizacao = moment(this.city.atualizacao, 'YYYY-MM-DD').format('LLLL');
                this.formatedPrediction.map( t => {
                    t.dia = moment(t.dia, 'YYYY-MM-DD').format('L');
                    t.diaSemana = moment(t.dia, 'YYYY-MM-DD').format('llll').split(',')[0];
                    t.info = getLabelOption(t.tempo);
                })

                console.log('fp', this.formatedPrediction);
                
            }
        }

    }
</script>

<style scoped>
    #weather-panel{
    }

    .dailyCards{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
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
</style>