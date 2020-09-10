import * as portfolioActions from "./portfolio.actions";
import * as portfolioGetters from "./portfolio.getters";
import * as portfolioMutations from "./portfolio.mutation";

const state = {
	funds: 10000,
	stocks: [],
};

const actions = portfolioActions;
const getters = portfolioGetters;
const mutations = portfolioMutations;

export default {
	state,
	getters,
	mutations,
	actions,
};
