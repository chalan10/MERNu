import { useState/*, useEffect*/ } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import LoginForm from "./LoginForm.js"
import "./Login.css"

function Login({ username, setUsername, password, setPassword, accountType, setAccountType }) {
	const history = useHistory()
	const [ type, setType ] = useState()

	function handleLogin(e, data) {
		e.preventDefault()
		const loginInfo = {
			username: data.username,
			password: data.password,
			type: type
		}
		axios.post(`http://localhost:5000/login/${type}`, loginInfo)
			.then(res => {
				console.log("token", res.data)
				if (res.data.success) {
					setUsername(data.username)
					setPassword(data.password)
					setAccountType(type)
					// TODO: are we going to need to have separate api calls for each user in backend?
					// idk if just pushing to a generic /customer or /restaurant page works
					// rn it works by doing that and just displaying correct info from db according to user id
					history.push(`/${type}`)
				}
				else {
					alert(res.data.msg)
				}
			})
			.catch(err => console.log("Login Error", err))
	}

	function customerLogin() {
		return(
			<div className="customer-login">
	   			<h2>Customer Login</h2>
				<LoginForm handleLogin={handleLogin} />
	   		</div>
		)
	}

	function restaurantLogin() {
		return(
	   		<div className="restaurant-login">
	   			<h2>Restaurant Login</h2>
				<LoginForm handleLogin={handleLogin} />
	   		</div>
		)
	}

	return(
		<div className="login">
			<div className="login-type">
				<h2>Account Type: {type}</h2>
				<button onClick={() => setType("customer")}>Customer</button>
				<button onClick={() => setType("restaurant")}>Restaurant</button>
			</div>
			
			{type === "customer" && customerLogin()}
			{type === "restaurant" && restaurantLogin()}

	   		<Link to="/create">Create Account</Link>
	   	</div>
	)
}

export default Login
