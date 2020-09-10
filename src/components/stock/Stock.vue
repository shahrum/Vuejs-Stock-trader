<template>
<div class="stock col-sm-6 col-md-4">
    <div class="panel panel-default panel-success">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{ stock.name }} <small>(Price: {{ stock.price }})</small>
            </h3>
        </div>
        <div class="panel-body panel-success">
            <div class="pull-left">
                <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{ danger: insufficentFunds }" />
            </div>
            <div class="pull-right">
                <button class="btn btn-success" @click="buyStock" :disabled="disbaleBuyButton" :class="{ 'btn-danger': insufficentFunds }">
                    {{ insufficentFunds ? "Insufficent Funds" : "BUY" }}
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
        funds() {
            return this.$store.getters.getFundsGetter;
        },
        disbaleBuyButton() {
            return (
                this.quantity <= 0 || this.quantity % 1 !== 0 || this.insufficentFunds
            );
        },
        insufficentFunds() {
            return this.stock.price * this.quantity > this.funds;
        },
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            };

            if (order.stockPrice * order.quantity > this.funds) {
                return;
            }

            this.$store.dispatch("buyStocksAction", order);

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

.danger {
    border: 1px solid red;
}
</style>
