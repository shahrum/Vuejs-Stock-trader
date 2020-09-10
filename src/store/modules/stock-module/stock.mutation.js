export const setStocks = (state, stocks) => {
	state.stocks = stocks;
};

export const rndStocks = (state) => {
	state.stocks.forEach((stock) => {
		stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
	});
};
