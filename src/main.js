import Vue from "vue";
import App from "./App.vue";

// Vue resource

import VueResource from "vue-resource";

// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// routing
import VueRouter from "vue-router";
import { routes } from "./routes/route";

// Store
import { store } from "./store/store";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = "https://vue-js-29638.firebaseio.com/";
Vue.http.interceptors.push((request, next) => {
	console.log("interceptor", request);
	next();
});

Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
	mode: "history",
	routes,
});

Vue.filter("currency", (value) => {
	return "$" + value.toLocaleString();
});

Vue.directive("highlight", {
	bind(el, binding, vnode) {
		if (binding.arg) {
			el.style[binding.arg] = binding.value;
		}
		console.log("bining", binding);
		console.log("vnode", vnode);
	},
});

router.beforeEach((to, from, next) => {
	console.log("router beforeEach to", to);
	console.log("router beforeEach from", from);
	next();
});

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
