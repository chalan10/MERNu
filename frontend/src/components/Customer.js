import { BrowserRouter as Router, Switch, Route, Link,/* useHistory,*/ Redirect } from "react-router-dom"
import Account from "./Account.js"
import Order from "./Order.js"
import Active from "./Active.js"
import History from "./History.js"
import "./Customer.css"

function Customer({ username,/* setUsername,*/ name, setName, password, setPassword, type, setType, logout }) {
//	const history = useHistory()

	if (type !== "customer") {
		return <Redirect to="/" />
	}

	const routes = [
		{
			path: "/customer",
			exact: true,
			main: () => <Account username={username} name={name} setName={setName} type={type} />,
			title: "Account"
		},
		{
			path: "/customer/order",
			main: () => <Order username={username} />,
			title: "Place Order"
		},
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

	return(
		<div className="customer">
			<Router>
				<div className="sidebar">
					<h2>{name}</h2>
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
