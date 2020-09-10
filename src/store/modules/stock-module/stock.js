import * as stockActions from "./stock.action";
import * as stockMutations from "./stock.mutation";
import * as stockGetters from "./stock.getters";

const state = {
	stocks: [],
};
const getters = stockGetters;
const actions = stockActions;
const mutations = stockMutations;

export default {
	state,
	getters,
	mutations,
	actions,
};
