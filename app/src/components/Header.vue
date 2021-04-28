<template>
  <b-navbar id="titulo" variant="primary" type="light">
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
    .header {
        background-color: #3880ff;
        /* position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 999; */
    }

    #titulo {
        font-size: 22px;
        color:white;
        padding: 10px 20px;
        letter-spacing: 8px;
    }



</style>