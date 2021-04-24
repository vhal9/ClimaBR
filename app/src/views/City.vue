<template>

    <b-container id="weather-panel">
        <!-- /home/igor/Documentos/git/Pessoal/ClimaBR/app/public/images/ci.png -->

        <b-row class="city">
            {{city.nome + ' - ' + city.uf}}
        </b-row>

        <MainCard 
            :att="city.atualizacao" 
            :city="city.nome + ' - ' + city.uf" 
            :info="city.previsao[0].info"
            :min="city.previsao[0].minima"
            :max="city.previsao[0].maxima"
        />

    </b-container>

</template>

<script>
    import moment from 'moment';
    import { getLabelOption } from '../Utils/weatherHelper';
    import previsao244 from '../Utils/previsao244';
    import MainCard from '../components/cityWeather/MainCard.vue';

    export default {

        components: { MainCard },

        name: "Home",
        
        data: () => ({

            id: '',
            city: {
                atualizacao: '',
                nome: '',
                previsao: [{
                    tempo: '',
                    info: ''
                }]
            },

        }),

        mounted(){

            var url_string = window.location.href; 
            var url = new URL(url_string); 
            var pathname = url.pathname;
            this.id = pathname.split('/')[2];
            
            this.listar(this.id);
        },

        methods: {

            listar() {
                this.city = previsao244;
                moment.locale('pt');
                this.city.atualizacao = moment(this.city.atualizacao, 'YYYY-MM-DD').format('ll');
                this.city.previsao.map( t => {
                    t.info = getLabelOption(t.tempo);
                })
                console.log('city2', this.city);
            }
        }

    }
</script>

<style scoped>
    #weather-panel{

    }

    .city{
        padding: 15px;
        display: flex;
        margin: 0px !important;
        padding-bottom: 0px;

        font-size: 30px;
        font-weight: bolder;
        flex-direction: column;
        align-items: flex-end;
    }
</style>