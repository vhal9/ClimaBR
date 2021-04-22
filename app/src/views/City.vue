<template>

    <div>

        <MainCard :att="city.atualizacao" :city="city.nome" :icone="city.previsao[0].tempo"/>

    </div>

</template>

<script>

    import { getLabelOption } from '../Utils/weatherHelper';
    import previsao244 from '../Utils/previsao244';
    import MainCard from '../components/cityWeather/MainCard.vue';

    export default {
        
        components: { MainCard },

        name: "Home",
        
        data: () => ({

            id: '',
            city: null,

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
                console.log('lb', getLabelOption('in'));
                this.city = previsao244;
                console.log('city', this.city);
            }
        }

    }
</script>

<style scoped>

</style>