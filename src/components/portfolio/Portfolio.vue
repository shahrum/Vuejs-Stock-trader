<template>
<div>
    <div class="row">
        <app-stock v-for="stock in stocks" :key="stock.id" class="stock" :stock="stock"></app-stock>
    </div>
    {{ shahram() }}
</div>
</template>

<script>
import Stock from "./Stock";
import {
    mapGetters
} from "vuex";
export default {
    components: {
        appStock: Stock,
    },
    computed: {
        ...mapGetters({
            stocks: "getStockPortfolioGetter",
        }),
    },
    methods: {
        shahram() {
            console.log("agha", this.stocks);
            return "";
        },
    },
};
</script>
