<template>
<div class="stocks">
    <div class="row">
        <StockComponent v-for="stock in stocks" :key="stock.id" class="stock" :stock="stock"></StockComponent>
    </div>
</div>
</template>

<script>
import StockComponent from "./Stock";
import {
    mapGetters
} from "vuex";
export default {
    components: {
        StockComponent,
    },
    computed: {
        ...mapGetters({
            stocks: "getStocksGetter",
        }),
    },
};
</script>

<style scoped>
.stocks {
    display: flex;
}
</style>
