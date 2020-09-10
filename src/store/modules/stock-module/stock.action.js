import stocksData from "../../../data/stocks-data";

export const buyStock = (context, order) => {
	console.log("ey janam", order);
	context.commit("portfolioBuyStocksAction", order);
};

export const initStocksAction = ({ commit }) => {
	commit("setStocks", stocksData);
};

export const randomizeStocks = ({ commit }) => {
	commit("rndStocks");
};
