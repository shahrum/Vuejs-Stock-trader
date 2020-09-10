export const getStockPortfolioGetter = (state, getters) => {
	// the getters is refered to the global getter we have in store js
	//
	return state.stocks.map((stock) => {
		const record = getters.getStocksGetter.find(
			(element) => element.id === stock.id
		);
		return {
			id: stock.id,
			quantity: stock.quantity,
			name: record.name,
			price: record.price,
		};
	});
};

export const getFundsGetter = (state) => state.funds;
