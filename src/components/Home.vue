<template>
<div>
    <h1>Trade or view your portfolio</h1>
    <h6>You may save and load your data</h6>
    <h6>Click on 'End day' to begin a New day</h6>
    <hr />
    <p>Your Funds: {{ funds | currency }}</p>
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

<style scoped></style>
