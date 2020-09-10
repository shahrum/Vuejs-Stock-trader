import Vue from "vue";
import Vuex from "vuex";

import stocks from "./modules/stock-module/stock";
import portfolio from "./modules/portfolio-modules/portfolio";

import * as actions from "./actions";

Vue.use(Vuex);
export const store = new Vuex.Store({
	actions: {
		...actions,
	},
	modules: {
		stocks,
		portfolio,
	},
});
