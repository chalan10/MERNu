import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import Menu from "./Menu.js";
import Active from "./Active.js";
import History from "./History.js";
import "./Restaurant.css";

function Restaurant({ showNavBar, onToggle }) {
	const routes = [
		{
			path: "/restaurant/",
			exact: true,
			sidebar: () => <div>home</div>,
			main: () => <h2>Restaurant Page</h2>
		},
		{
			path: "/restaurant/menu/",
			sidebar: () => <div>menu</div>,
			main: () => <Menu />
		},
		{
			path: "/restaurant/active/",
			sidebar: () => <div>active</div>,
			main: () => <Active />
		},
		{
			path: "/restaurant/history/",
			sidebar: () => <div>history</div>,
			main: () => <History />
		}
	];

	// TODO: Avoid hardcoding restaurant path in link
	return(
		<div className="restaurant">
			<Router>
				<div className="sidebar">
					<h2>Restaurant Name</h2>
					<NavBar 
						color={showNavBar ? "red" : "green"}
						onToggle={onToggle}
					/><br/>
					<ul>
						<li>
							<Link to="/restaurant/">Home Page / Account</Link><br/>
						</li>
						<li>
							<Link to="/restaurant/menu/">Menu</Link><br/>
						</li>
						<li>
							<Link to="/restaurant/active/">Active Orders</Link><br/>
						</li>
						<li>
							<Link to="/restaurant/history/">Order History</Link>
						</li>
					</ul>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								children={<route.sidebar />}
							/>
						))}
					</Switch>
				</div>
				<div className="main-page">
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								children={<route.main />}
							/>
						))}
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default Restaurant;
