<template>
  <b-navbar id="titulo" variant="secondary" type="light">
    <b-navbar-brand href="/">
        <b-icon color="white" icon="house-door"/>
    </b-navbar-brand>
    <b-navbar-brand id="titulo">
        ClimaBR
    </b-navbar-brand>
  </b-navbar>
</template>

<script>

    export default {
        name: "Header",
    }
    
</script>

<style scoped>

    #titulo {
        font-size: 22px;
        color:white;
        padding: 10px 20px;
        letter-spacing: 8px;
    }



</style>