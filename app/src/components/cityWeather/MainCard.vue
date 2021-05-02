<template>

    <b-container id="main-weather">


            <b-col class="weather" sm="7">

                <b-col class="min-max" sm="2">
                    <div><b-icon color="red" icon="thermometer-half"/>{{minima}}°</div>
                    <div><b-icon color="blue" icon="thermometer"/>{{maxima}}°</div>
                </b-col>

                <b-col class="img-cont" sm="10">
                    <b-img-lazy
                        fluid
                        class="img"
                        :src="weatherIcon"
                    />
                </b-col>
                
            </b-col>

            <b-col class="data" sm="5">

                <b-row class="label">
                    {{label}}
                </b-row>

                <b-row class="date">
                    {{diaSemana}}, {{dia}}
                </b-row>

                <b-row class="desc">
                    {{description}}
                </b-row>

            </b-col>


    </b-container>

</template>

<script>

    export default {

        name: "CityCard",

        props: {
            dia: String,
            diaSemana: String,
            weatherIcon: String,
            label: String,
            description: String,
            iuv: String,
            maxima: String,
            minima: String,
        },
    }
    
</script>

<style scoped>

    #main-weather{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        align-items: flex-end;
    }

    .weather{
        margin: 0 !important;
        padding: 10px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .img {
        min-width: 100%;
        min-height: 100%;
    }

    .min-max{
        min-height: 150px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        font-weight: bolder;
        font-size: large;

        align-items: center;
        
    }

    .data {
        margin: 0 !important;
        padding: 10px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: flex-end;
    }

    .date {
        font-size: 13px;
        font-weight: bolder;
    }

    .label {
        font-size: 18px;
        font-weight: bolder;
    }

    .desc {
        margin-top: 25px;
        font-size: 12px;
    }

</style>