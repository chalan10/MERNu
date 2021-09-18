import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
import axios from "axios"
import Account from "./Account.js"
import Menu from "./Menu.js"
import Active from "./Active.js"
import History from "./History.js"
import "./Restaurant.css"

function Restaurant() {
	// TODO: should we store state here or in each comp?
	// we would have to fetch each time we navigate between the pages
	// in case there was a change
	// or
	// should we only store state relevant to each page
	//const [ restaurant, setRestaurant ] = useState([])
	// TODO: decided to go with not having a lifted state at common ancestor
	// since we don't need info on the menu at any other comp other than menu
	// same with active orders and order history, none of the comp care about
	// the info the other ones have and having one parent state would be outdated
	// and we'd have to update it everytime
	
	const history = useHistory()

	// Route implemented this way so that we can use it for both sidebar and main
	const routes = [
		{
			path: "/restaurant",
			exact: true,
			main: () => <Account />,
			title: "Account"
		},
		{
			path: "/restaurant/menu",
			main: () => <Menu />,
			title: "Menu"
		},
		{
			path: "/restaurant/active",
			main: () => <Active />,
			title: "Active Orders"
		},
		{
			path: "/restaurant/history",
			main: () => <History />,
			title: "Order History"
		},
		{
			path: "/login",
			title: "Logout"
		}
	]

	/* TODO: don't need to fetch here?
	function fetchRestaurant() {
		axios.get(`http://localhost:5000/api/restaurant/${rid}`)
			.catch(err => console.log("Fetch Restaurant Error", err))
	}
	*/

	// TODO: logout should probably make an api call instead of just pushing to history
	// actually maybe not
	return(
		<div className="restaurant">
			<Router>
				<div className="sidebar">
					<h2>Restaurant Name</h2>
					{routes.map(route => {
						if (route.path === "/login") {
							return(
								<div className="sidebar-item" key={route.path}>
									<Link to={route.path} onClick={() => history.push("/login")}>
										{route.title}
									</Link>
								</div>
							)
						}
						return(
							<div className="sidebar-item" key={route.path}>
								<Link to={route.path}>{route.title}</Link>
							</div>
						)
					})}
				</div>
				<div className="main">
					<Switch>
						{routes.map(route => (
							<Route key={route.path} path={route.path} exact={route.exact} children={route.main}/>
						))}
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default Restaurant
