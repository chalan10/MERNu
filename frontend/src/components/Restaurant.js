import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Menu from "./Menu.js"
import Active from "./Active.js"
import History from "./History.js"
import "./Restaurant.css"

function Restaurant() {
	// TODO: Avoid hardcoding restaurant path in link
	const routes = [
		{
			path: "/restaurant/",
			exact: true,
			main: () => <h2>Restaurant Page</h2>,
			title: "Restaurant Page"
		},
		{
			path: "/restaurant/menu/",
			main: () => <Menu/>,
			title: "Menu"
		},
		{
			path: "/restaurant/active/",
			main: () => <Active />,
			title: "Active Orders"
		},
		{
			path: "/restaurant/history/",
			main: () => <History />,
			title: "Order History"
		},
		{
			path: "/",
			exact: true,
			title: "Logout"
		}
	]

	return(
		<div className="restaurant">
			<Router>
				<ul className="sidebar">
					<h2>Restaurant Name</h2>
					<div>
						{routes.map(route => (
							<li className="sidebar-item" key={route.path}>
								<Link to={route.path}>
									{route.title}
								</Link>
							</li>
						))}
					</div>
				</ul>
				<div className="main">
					<Switch>
						{routes.map(route => (
							<Route
								key={route.path}
								path={route.path}
								exact={route.exact}
								children={route.main}
							/>
						))}
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default Restaurant
