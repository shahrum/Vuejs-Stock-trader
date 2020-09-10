import Vue from "vue";

export const loadDataAction = ({ commit }) => {
	console.log("inja miad");
	Vue.http
		.get("stock-data.json")
		.then((res) => {
			return res.json();
		})
		.then((response) => {
			console.log("load data", response);
			if (response) {
				const stocks = response.stocks;
				const funds = response.funds;
				const stockPortfolio = response.stockPortfolio;
				const portfolio = {
					stockPortfolio,
					funds,
				};

				commit("setStocks", stocks);
				commit("setPortfolioMutation", portfolio);
			}
		});
};
