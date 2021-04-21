<template>
    <div class="Header">
        <b-container fluid class="header" variant="primary">
            <b-row sm="12" align-v="center" align-h="center" id="titulo">
                <label >CLIMABR</label>
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
    .header {
        background-color: #3880ff;
    }

    #titulo {
        font-size: 22px;
        color:white;
        padding: 10px 20px;
        letter-spacing: 8px;
    }



</style>