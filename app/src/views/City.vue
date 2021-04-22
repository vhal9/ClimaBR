<template>
    <div>

    <h1>heuehueheuhe</h1>
    <h2>{{id}}</h2>

    </div>

</template>

<script>

    import { getLabelOption } from '../Utils/weatherHelper';
    //import sp244 from '../Utils/previsao244.xml';

    export default {
        name: "Home",
        
        data: () => ({

            id: '',

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
                console.log('lb', getLabelOption('ppct'));
            }
        }

    }
</script>

<style scoped>

</style>