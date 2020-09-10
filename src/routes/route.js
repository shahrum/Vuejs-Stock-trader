import HomeComponent from "../components/Home.vue";
import StocksComponent from "../components/stock/Stocks.vue";
import PortfolioComponent from "../components/portfolio/Portfolio.vue";

import SignInComponent from "../components/auth/Signin.vue";
import SignUpComponent from "../components/auth/Signup.vue";

export const routes = [
	{ path: "", component: HomeComponent },
	{ path: "/stocks", component: StocksComponent },
	{ path: "/portfolio", component: PortfolioComponent },
	{ path: "/signin", component: SignInComponent },
	{ path: "/signup", component: SignUpComponent },
];
