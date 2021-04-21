<template>
    <div>

    <h1>heuehueheuhe</h1>
    <h2>{{id}}</h2>

    </div>

</template>

<script>

    export default {
        name: "Home",
        data: () => ({

            id: '',

        }),

        mounted(){

            var url_string = window.location.href; 
            var url = new URL(url_string); 
            var pathname = url.pathname;
            console.log(pathname.split('/'));
            this.id = pathname.split('/')[2];
        },

    }
</script>

<style scoped>

</style>