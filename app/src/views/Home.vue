<template>

    <div class="Home">

        <b-container class='formulario' >
            <b-form-input prepend="%" placeholder="Buscar cidade..." trim >

            </b-form-input>
            
        </b-container>

        <b-container class="resultado">
            <div v-for="item in items " :key="item.cidade">
                <b-card v-bind:title="item.cidade" v-bind:sub-title="item.estado"></b-card>
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
            items:[]
      }
    },
}
</script>

<style scoped>
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