<template>
<div class="stock col-sm-6 col-md-4">
    <div class="panel panel-default panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{ stock.name }}
                <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
            </h3>
        </div>
        <div class="panel-body panel-success">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" />
            </div>
            <div class="pull-right">
                <button class="btn btn-danger" @click="sellStock" :disabled="

insufficentQuantity || quantity <= 0 || quantity % 1 !== 0

">
                    {{ insufficentQuantity ? "Insufficient Quantity" : "Sell" }}
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
export default {
    props: {
        stock: {},
    },
    data() {
        return {
            quantity: 0,
        };
    },
    computed: {
        ...mapGetters({
            stocks: "getStockPortfolioGetter",
        }),
        insufficentQuantity() {
            return this.quantity > this.stock.quantity;
        },
    },
    methods: {
        ...mapActions({
            sellStockAction: "portfolioSellStocksAction",
        }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            // this.$store.dispatch("buyStocksAction", order);
            this.sellStockAction(order);
            console.log(order);
            this.quantity = 0;
        },
    },
};
</script>

<style scoped>
.stock {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #d6e9c6;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-title {
    color: #3c763d;
    background-color: #dff0d8;
    padding: 20px 15px;
}

.panel-body {
    display: flex;
    padding: 30px 10px;
    justify-content: space-between;
}
</style>
