import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import Menu from "./Menu.js";
import Active from "./Active.js";
import History from "./History.js";
import "./Restaurant.css";

const routes = [
	{
		path: "/restaurant/",
		exact: true,
		sidebar: () => <div>home</div>,
		main: () => <h2>Restaurant Page</h2>,
		title: "Restaurant Page"
	},
	{
		path: "/restaurant/menu/",
		sidebar: () => <div>menu</div>,
		main: () => <Menu />,
		title: "Menu"
	},
	{
		path: "/restaurant/active/",
		sidebar: () => <div>active</div>,
		main: () => <Active />,
		title: "Active Orders"
	},
	{
		path: "/restaurant/history/",
		sidebar: () => <div>history</div>,
		main: () => <History />,
		title: "Order History"
	},
	{
		path: "/",
		exact: true,
		title: "Logout"
	}
];

function Restaurant({ showNavBar, onToggle }) {
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
					{routes.map((item, index) => {
						return (
							<div className="sidebar-item">
								<Link to={item.path}>
									{item.title}
								</Link>
							</div>
						);
					})}
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
