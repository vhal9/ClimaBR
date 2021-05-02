<template>
  <div id="app">
    <Header />
    <div class="body-container">
      <router-view />
    </div>
    
    <!-- <Footer /> -->
  </div>
</template>

<script>

    import Header from "@/components/Header.vue";
    // import Footer from "@/components/Footer.vue";

    export default {

        name: "App",

        components: {
            Header,
            // Footer,
        },
    };

</script>


<style>

#app {
  font-family: Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  height: 100vh;

  overflow:hidden;

}

.body-container {
  
  color: white;
  background-image: url("https://wallpapercave.com/wp/wp2839514.jpg");
  height: 90%;
  
}

</style>
