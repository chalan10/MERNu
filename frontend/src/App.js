import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login.js";
import Create from "./components/Create.js";
import Customer from "./components/Customer.js";
import Restaurant from "./components/Restaurant.js";
import "./App.css";

function App() {
	const [ showNavBar, setShowNavBar ] = useState(false);

	function onToggle() {
		setShowNavBar(!showNavBar);
		console.log(showNavBar);
	}

	/* fetch data from backend
	const [message, setmessage] = useState(0);

	useEffect(() => {
		fetch("/hello/").then(res => res.json()).then(data => {
			setmessage(data.msg)
		});
	}, []);

	<div>{message}</div>
	*/

	// TODO: remove navbar links once redirection works
	return(
		<Router>
			<div>
				<Link to="/">Login</Link><br/>
				<Link to="/create/">Create Account</Link><br/>
				<Link to="/customer/">Customer Page</Link><br/>
				<Link to="/restaurant/">Restaurant Page</Link><br/>
				<hr/>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/create/">
						<Create />
					</Route>
					<Route path="/customer/">
						<Customer />
					</Route>
					<Route path="/restaurant/">
						<Restaurant showNavBar={showNavBar} onToggle={onToggle}/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
