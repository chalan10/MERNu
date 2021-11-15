import { useState/*, useEffect*/ } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import LoginForm from "./LoginForm.js"
import "./Login.css"

function Login({ username, setUsername, name, setName, password, setPassword, type, setType }) {
	const history = useHistory()

	if (localStorage.username) {
		// TODO: 401 every time we try to go to home page, what do?
		history.push(`/${localStorage.type}`)
	}

	function handleLogin(e, data) {
		e.preventDefault()
		// TODO: shouldn't need to store password; remove it later
		// can replace this with jwt token once done
		const loginInfo = {
			username: data.username,
			password: data.password,
			type: type
		}
		axios.post(`http://localhost:5000/login/${type}`, loginInfo)
			.then(res => {
				console.log("server response", res.data)
				if (res.data.success) {
					setUsername(data.username)
					setName(data.name)
					setPassword(data.password)
					setType(type)
					// TODO: are we going to need to have separate api calls for each user in backend?
					// idk if just pushing to a generic /customer or /restaurant page works
					// rn it works by doing that and just displaying correct info from db according to user id
					localStorage.setItem("jwtToken", res.data.token)
					// TODO: for now, storing username and type, find a better way to do this though
					localStorage.setItem("username", res.data.username)
					localStorage.setItem("name", res.data.name)
					localStorage.setItem("type", res.data.type)
					if (res.data.token) {
						axios.defaults.headers.common["Authorization"] = res.data.token
					}
					else {
						delete axios.defaults.headers.common["Authorization"]
					}
					//check for expire
					//decode jwt
					//set current user
					
					// TODO: change how we redirect to customer page rather than just pushing?
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
