import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Cart from "./Cart.js"
import "./Customer.css"

function Customer() {
	return (
		<div>
			<h2>Customer Page</h2>
			<Router>
				<Link to="/customer/cart/">Cart</Link>
				<Switch>
      				<Route path="/customer/cart/">
      					<Cart />
      				</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default Customer
