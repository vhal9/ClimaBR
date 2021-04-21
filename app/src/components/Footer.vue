<template>
    <div class="Footer">
        <b-container fluid class="footer" variant="primary">
            <b-row sm="12" align-v="center" align-h="center" id="titulo">
                <label >ClimaBR</label>
            </b-row>
        </b-container>        
    </div>
</template>

<script>

    export default {
        name: "Header",
    }
    
</script>

<style scoped>
    .footer {
        background-color: #3880ff;
        position:absolute;
        bottom:0;
        width:100%;
    }

    #titulo {
        font-size: 15px;
        color:black;
        padding: 10px 20px;
    }



</style>