<template>

    <div>

        <h1>{{city}}</h1>
        <h3>{{att}}</h3>
        {{icone}}


    </div>

</template>

<script>

    export default {

        name: "CityCard",
        
        data: () => ({

            id: '',
            city: null,

        }),

        mounted(){

        },

        methods: {

        },

        props: {
            city: String,
            att: String,
            icone: String,
        }

    }
</script>

<style scoped>

</style>