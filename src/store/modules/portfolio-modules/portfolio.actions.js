export const portfolioSellStocksAction = ({ commit }, order) => {
	commit("sellStockMutation", order);
};
export const buyStocksAction = ({ commit }, order) => {
	console.log("buyStocksAction order", order);
	commit("buyStockMutation", order);
};
