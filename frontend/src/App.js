//import { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Login from "./components/Login.js"
import Create from "./components/Create.js"
import Customer from "./components/Customer.js"
import Restaurant from "./components/Restaurant.js"
import "./App.css"

function App() {
	// TODO: keep state of currently logged in account info (relevant info)
	// TODO: remove navbar links once redirection works
	return(
		<div>
			<Router>
				<div className="navbar">
					<Link to="/">Login</Link><br/>
					<Link to="/create">Create Account</Link><br/>
					<Link to="/customer">Customer Page</Link><br/>
					<Link to="/restaurant">Restaurant Page</Link><br/>
					<hr/>
				</div>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/customer">
						<Customer />
					</Route>
					<Route path="/restaurant">
						<Restaurant />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
