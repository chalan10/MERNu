import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import Menu from "./Menu.js";
import Active from "./Active.js";
import History from "./History.js";
import "./Restaurant.css";

const menuItems = [
	{
		name: "French Fries",
		description: "Appetizer",
		price: 3.99,
		edit: false
	},
	{
		name: "Burger",
		description: "Entree",
		price: 8.99,
		edit: false
	},
	{
		name: "Soda",
		description: "Beverage",
		price: 1.99,
		edit: false
	},
	{
		name: "Ice Cream",
		description: "Dessert",
		price: 2.99,
		edit: false
	}
];


function Restaurant({ showNavBar, onToggle }) {
	const [ showEdit, setShowEdit ] = useState();
	const [ showCategory, setShowCategory ] = useState();
	function toggleEditItem() {
		setShowEdit(!showEdit);
	}
	function toggleCategory() {
		setShowCategory(!showCategory);
	}

	const routes = [
		{
			path: "/restaurant/",
			exact: true,
			sidebar: () => {return null},
			main: () => <h2>Restaurant Page</h2>,
			title: "Restaurant Page"
		},
		{
			path: "/restaurant/menu/",
			sidebar: () => {return null},
			main: () => <Menu
							menuItems={menuItems}
							showEdit={showEdit}
							onEdit={toggleEditItem}
							showCategory={showCategory}
							toggleCategory={toggleCategory}
						/>,
			title: "Menu"
		},
		{
			path: "/restaurant/active/",
			sidebar: () => {return null},
			main: () => <Active />,
			title: "Active Orders"
		},
		{
			path: "/restaurant/history/",
			sidebar: () => {return null},
			main: () => <History />,
			title: "Order History"
		},
		{
			path: "/",
			exact: true,
			title: "Logout"
		}
	];

	// TODO: Avoid hardcoding restaurant path in link
	return(
		<div className="restaurant">
			<Router>
				<ul className="sidebar">
					<h2>Restaurant Name</h2>
					<NavBar 
						color={showNavBar ? "red" : "green"}
						onToggle={onToggle}
					/><br/>
					<div>
						{routes.map((item, index) => {
							return (
								<li className="sidebar-item">
									<Link to={item.path}>
										{item.title}
									</Link>
								</li>
							);
						})}
					</div>
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
				</ul>
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
