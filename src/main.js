import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// routing
import VueRouter from "vue-router";
import { routes } from "./routes/route";

// Store
import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.filter("currency", (value) => {
	return "$" + value.toLocaleString();
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
