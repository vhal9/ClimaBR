<template>

    <b-container id="daily-weather">

            <b-row class="data">

                <b-row class="day">
                    {{diaSemana}}
                </b-row>

                <b-row class="date">
                    {{dia}}
                </b-row>
            
                <b-row class="label">
                    {{label}}
                </b-row>

            </b-row>

            <b-row class="weather">

                <b-row class="img-cont">
                    <b-img-lazy
                        fluid
                        class="img"
                        :src="weatherIcon"
                    />
                </b-row>

                <b-row class="min-max">
                    <b-icon color="red" icon="thermometer-half"/>{{minima}}°
                    <b-icon color="blue" icon="thermometer"/>{{maxima}}°
                </b-row>
                
            </b-row>

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

    #daily-weather{
        min-height: 150px;
        max-width: 18vh;
        margin: 10px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: rgba(102, 144, 233, 0.322);
        border-radius: 15px;

        -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.78); 
        box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.78);
    }

    .weather{
        min-width: 100%;
        padding: 0px;
        margin: 0 !important;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .img-cont {
        min-height: 80px;
        max-height: 200px;
        min-width: 100%;
        padding: 0px;
    }

    .img {
        min-width: 100%;
        min-height: 100%;
    }

    .min-max{
        display: flex;
        font-weight: bolder;
        font-size: 15px;
        align-items: center;
    }

    .data {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .day {
        font-size: 30px;
        font-weight: bolder;
    }

    .date {
        font-size: 10px;
    }

    .label {
        font-size: 10px;
        font-weight: bolder;
    }


</style>