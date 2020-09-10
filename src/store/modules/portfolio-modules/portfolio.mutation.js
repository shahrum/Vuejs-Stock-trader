export const buyStockMutation = (state, { stockId, quantity, stockPrice }) => {
	console.log("buyStockMutation stockId", stockId);
	console.log("buyStockMutation quantity", quantity);
	console.log("buyStockMutation stockPrice", stockPrice);
	const record = state.stocks.find((element) => element.id === stockId);
	if (record) {
		record.quantity += quantity;
	} else {
		state.stocks.push({
			id: stockId,
			quantity: quantity,
		});
	}
	state.funds -= stockPrice * quantity;
};

export const sellStockMutation = (state, { stockId, quantity, stockPrice }) => {
	const record = state.stocks.find((element) => element.id === stockId);
	if (record.quantity > quantity) {
		record.quantity -= quantity;
	} else {
		state.stocks.splice(state.stocks.indexOf(record), 1);
	}
	state.funds += stockPrice * quantity;
};
