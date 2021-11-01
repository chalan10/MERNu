import { BrowserRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom"
import Account from "./Account.js"
import Active from "./Active.js"
import History from "./History.js"
import Cart from "./Cart.js"
import "./Customer.css"

function Customer({ username, setUsername, password, setPassword, accountType, setAccountType }) {
	const history = useHistory()

	if (accountType !== "customer") {
		return <Redirect to="/" />
	}

	const routes = [
		{
			path: "/customer",
			exact: true,
			main: () => <Account username={username} accountType={accountType} />,
			title: "Account"
		},
		/* Place Order
		{
			path: "/customer/menu",
			main: () => <Menu username={username} />,
			title: "Menu"
		},
		*/
		{
			path: "/customer/active",
			main: () => <Active />,
			title: "Active Orders"
		},
		{
			path: "/customer/history",
			main: () => <History />,
			title: "Order History"
		},
		{
			path: "/",
			exact: true,
			title: "Logout"
		}
	]

	function logout() {
		setUsername("")
		setPassword("")
		setAccountType("")
		history.push("/")
	}

	return(
		<div className="customer">
			<Router>
				<div className="sidebar">
					<h2>{username}</h2>
					{routes.map(route => {
						if (route.path === "/") {
							return(
								<div className="sidebar-item" key={route.path}>
									<Link to={route.path} onClick={() => logout()}>
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

export default Customer
