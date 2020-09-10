<template>
<div id="app" class="container-fluid">
    <app-header></app-header>
    <router-view></router-view>
</div>
</template>

<script>
import Header from "./components/Header";
export default {
    name: "App",
    components: {
        appHeader: Header,
    },
    created() {
        this.$store.dispatch("initStocksAction");
    },
};
</script>

<style>
body {
    padding: 30px;
}
</style>
