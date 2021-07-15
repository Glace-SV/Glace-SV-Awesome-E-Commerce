import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import React, { useContext } from "react";
import { Home } from "./pages/home";
import { GiftsInfoCard } from "./pages/Gifts";
import { CakesInfoCard } from "./pages/Cakes";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import injectContext from "./store/appContext";
import { NavBarTwo } from "./component/navbar";
import { Footer } from "./component/footer";
import { Context } from "./store/appContext";
import { Fab } from "./component/fab";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBarTwo />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/gifts">
							<GiftsInfoCard />
						</Route>
						<Route exact path="/cakes">
							<CakesInfoCard />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
					<Fab />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
