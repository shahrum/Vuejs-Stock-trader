import HomeComponent from "../components/Home.vue";
import StocksComponent from "../components/stock/Stocks.vue";
import PortfolioComponent from "../components/portfolio/Portfolio.vue";

export const routes = [
	{ path: "", component: HomeComponent },
	{ path: "/stocks", component: StocksComponent },
	{ path: "/portfolio", component: PortfolioComponent },
];
