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
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        End Day
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
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
    mapGetters
} from "vuex";
export default {
    computed: {
        ...mapGetters({
            funds: "getFundsGetter",
        }),
    },
};
</script>
