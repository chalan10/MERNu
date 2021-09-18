import { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import LoginForm from "./LoginForm.js"
import "./Login.css"

function Login() {
	const history = useHistory()
	const [ type, setType ] = useState()
	/*
	const [ username, setUsername ] = useState()
	const [ password, setPassword ] = useState()
	*/

	function handleLogin(e, data) {
		e.preventDefault()
		const loginInfo = {
			username: data.username,
			password: data.password,
			type: type
		}
		axios.post("http://localhost:5000/login", loginInfo)
			.then(res => {
				if (res.data === "success") {
					history.push(`/${type}`)
				}
				else {
					alert("failure")
				}
			})
			.catch(err => console.log("Login Error", err))
	}

	return(
		<div className="login">
			<div className="login-type">
				<h2>Account Type: {type}</h2>
				<button onClick={() => setType("customer")}>Customer</button>
				<button onClick={() => setType("restaurant")}>Restaurant</button>
			</div>
			
			{type === "customer" &&
				<div className="customer-login">
	   				<h2>Customer Login</h2>
					<LoginForm handleLogin={handleLogin} />
	   			</div>
			}

			{type === "restaurant" &&
	   			<div className="restaurant-login">
	   				<h2>Restaurant Login</h2>
					<LoginForm handleLogin={handleLogin} />
	   			</div>
			}

	   		<Link to="/create">Create Account</Link>
	   	</div>
	)
}

export default Login
