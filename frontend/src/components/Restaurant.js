import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import Menu from "./Menu.js";
import Active from "./Active.js";
import History from "./History.js";
import "./Restaurant.css";

function Restaurant({ showNavBar, onToggle }) {
	const [ menuItems, setMenuItems ] = useState([
		{
			id: 1,
			name: "French Fries",
			description: "Appetizer",
			price: 3.99,
			edit: false
		},
		{
			id: 2,
			name: "Burger",
			description: "Entree",
			price: 8.99,
			edit: false
		},
		{
			id: 3,
			name: "Soda",
			description: "Beverage",
			price: 1.99,
			edit: false
		},
		{
			id: 4,
			name: "Ice Cream",
			description: "Dessert",
			price: 2.99,
			edit: false
		}
	]);

	const [ showCategory, setShowCategory ] = useState();

	function toggleEditItem(id) {
		setMenuItems(
			menuItems.map((menuItem) =>
				menuItem.id === id ? { ...menuItem, edit: !menuItem.edit } : menuItem
			)
		);
	}

	function deleteItem(id) {
		setMenuItems(menuItems.filter((menuItem) => menuItem.id !== id))
	}

	function toggleCategory() {
		setShowCategory(!showCategory);
	}

	const routes = [
		{
			path: "/restaurant/",
			exact: true,
			main: () => <h2>Restaurant Page</h2>,
			title: "Restaurant Page"
		},
		{
			path: "/restaurant/menu/",
			main: () => <Menu
							menuItems={menuItems}
							setMenuItems={setMenuItems}
							toggleEditItem={toggleEditItem}
							deleteItem={deleteItem}
							showCategory={showCategory}
							toggleCategory={toggleCategory}
						/>,
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
				</ul>
				<div className="main">
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
