<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>

        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
                <router-link to="/stocks" tag="li" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link" @click="endDay()">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" @click="saveData()">Save Data</a>
                        <a class="dropdown-item" @click="loadData()">Load Data</a>
                    </div>
                </li>
            </ul>

            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        </div>
    </nav>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from "vuex";
export default {
    data() {
        return {
            isDropDownOpen: true,
        };
    },
    computed: {
        ...mapGetters({
            funds: "getFundsGetter",
            stockPortfolio: "getStockPortfolioGetter",
            stocks: "getStocksGetter",
        }),
    },
    methods: {
        ...mapActions({
            randomize: "randomizeStocks",
            fetchData: "loadDataAction",
        }),
        endDay() {
            console.log("Salam");
            this.randomize();
        },
        saveData() {
            const data = {
                funds: this.funds,
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks.map((el) => {
                    return {
                        id: el.id,
                        name: el.name,
                        price: el.price,
                    };
                }),
            };
            console.log("kale kiri", data);
            this.$http.put("stock-data.json", data);

            // .then((res) => {
            //     return res.json();
            // })
            // .then((response) => {
            //     let resultArray = [];
            //     for (let key in response) {
            //         resultArray.push({
            //             ...response[key],
            //             id: key,
            //         });
            //     }
            //     this.users = resultArray;
            // });
        },
        loadData() {
            this.fetchData();
        },
    },
};
</script>
