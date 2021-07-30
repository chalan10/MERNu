import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu.js";
import Active from "./Active.js";
import History from "./History.js";
import "./Restaurant.css";

class Restaurant extends React.Component {
	// TODO: Avoid hardcoding restaurant path in link
	render() {
		return(
			<div>
				<h2>Restaurant Page</h2>
				<Router>
					<nav>
						<Link to="/restaurant/">Home Page / Account</Link><br/>
						<Link to="/restaurant/menu/">Menu</Link><br/>
						<Link to="/restaurant/active/">Active Orders</Link><br/>
						<Link to="/restaurant/history/">Order History</Link>
					</nav>
					<Switch>
	      				<Route path="/restaurant/menu/">
	      					<Menu />
	      				</Route>
	      				<Route path="/restaurant/active/">
	      					<Active />
	      				</Route>
	      				<Route path="/restaurant/history/">
	      					<History />
	      				</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Restaurant;
