<template>

    <b-container id="main-weather">


            <b-col class="weather" sm="7">

                <b-col class="min-max" sm="2">
                    <div><b-icon color="red" icon="thermometer-half"/>{{max}}°</div>
                    <div><b-icon color="blue" icon="thermometer"/>{{min}}°</div>
                </b-col>

                <b-col class="img-cont" sm="10">
                    <b-img 
                        class="img"
                        :src="'../images/' + info.icon + '.png'"

                    />
                </b-col>
                
            </b-col>

            <b-col class="data" sm="5">

                <!-- <b-row class="city">
                    {{city}}
                </b-row> -->

                <b-row class="label">
                    {{info.label}}
                </b-row>

                <b-row class="date">
                    {{att}}
                </b-row>

                <b-row class="desc">
                    {{info.description}}
                </b-row>

            </b-col>


    </b-container>

</template>

<script>

    export default {

        name: "CityCard",

        props: {
            city: String,
            att: String,
            info: null,
            min: String,
            max: String,
            desc: String,
        }

    }
</script>

<style scoped>

    #main-weather{
        display: flex;
        justify-content: space-around;
        align-items: center;
        max-width: 600px;
    }

    .weather{
        margin: 0 !important;
        padding: 10px;
        display: flex;
        align-items: flex-start;
        flex-direction: row;
    }

    .img-cont {
    }
    .img {
        min-width: 100%;
        min-height: 100%;
    }

    .min-max{
        min-height: 150px;
        display: flex;
        font-weight: bolder;
        font-size: large;
        justify-content: space-around;

        align-items: center;
        flex-direction: column;
    }

    .data {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-evenly;
    }

    .date {
        font-size: 13px;
    }

    .label {
        font-size: 18px;
        font-weight: bolder;
    }

    .desc {
        font-size: 12px;
    }

</style>