<template>
    <div class="Home">
        <b-container fluid class="header" variant="primary">
            <b-row sm="12" align-v="center" align-h="center" id="titulo">
                <label >CLIMABR</label>
            </b-row>
        </b-container>
        <b-container class='formulario' >
            <b-row>
                <b-form-input placeholder="Buscar cidade..." trim ></b-form-input>
            </b-row>
            
        </b-container>

        <b-container class="resultado">
            <div v-for="item in items " :key="item.cidade">
                <b-card v-bind:title="item.cidade" v-bind:sub-title="item.estado">
               
                </b-card>
            </div>
            <b-card v-if="items.length == 0" overlay >
                <label class="resultadoVazio">Cidade não encontrada</label>
                
            </b-card>
        </b-container>


        
    </div>
</template>

<script>

export default {
    name: "Home",
    data() {
      return {
            items:[
                // {cidade: "Volta Redonda", estado: "RJ"},
                // {cidade: "Volta Grande", estado: "MG"}
            ]
      }
    },
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
    }

    label {
        margin: 0px !important;
    }

    .formulario {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        margin-top: 2%;
    }

    .resultado {
        width: 60%;
        margin-top: 2%;
        display: flex;
        flex-direction: column;
    }

    .resultadoVazio {
        font-weight: 800;
    }


</style>