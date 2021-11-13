import { useState/*, useEffect*/ } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
//import axios from "axios"
import Login from "./components/Login.js"
import Create from "./components/Create.js"
import Customer from "./components/Customer.js"
import Restaurant from "./components/Restaurant.js"
import "./App.css"

/* TODO: not sure if we need this
if (localStorage.jwtToken) {
	//const token = localStorage.jwtToken
	//setAuthToken(token)
	if (localStorage.jwtToken) {
		axios.defaults.headers.common["Authorization"] = localStorage.jwtToken
	}
	else {
		delete axios.defaults.headers.common["Authorization"]
	}
	//decode jwt for user info
	//set user info
	//setUsername(localStorage.username)
	//setAccountType(localStorage.type)
	// check for expired token and redirect if invalid or expired
}
*/

function App() {
	// TODO: keep state of currently logged in account info (relevant info)
	// TODO: login not persisting: between pages it persists, but refreshing page wipes state
	// TODO: do we want to keep track of customer current order/cart in between sessions in case they want
	// to come back to it later? atm customer carts are client side so if customer refreshes page/logs out/etc
	// before placing their order, all progress will be lost
	const [ username, setUsername ] = useState(localStorage.username)
	const [ password, setPassword ] = useState("")
	const [ accountType, setAccountType ] = useState(localStorage.type)

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
				<div>
					Username: {username}
					<br/>
					Password: {password}
					<br/>
					Account Type: {accountType}
				</div>
				<Switch>
					<Route exact path="/">
						<Login
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
							accountType={accountType}
							setAccountType={setAccountType}
						/>
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/customer">
						<Customer 
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
							accountType={accountType}
							setAccountType={setAccountType}
						/>
					</Route>
					<Route path="/restaurant">
						<Restaurant
							username={username}
							setUsername={setUsername}
							password={password}
							setPassword={setPassword}
							accountType={accountType}
							setAccountType={setAccountType}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
