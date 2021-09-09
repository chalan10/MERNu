import React from "react"
import { /*BrowserRouter as Router, Switch, Route,*/ Link } from "react-router-dom"
//import Customer from "./Customer.js"
//import Restaurant from "./Restaurant.js"
//import Create from "./Create.js"
import "./Login.css"

function Login() {
	// TODO: keep state here or in App.js?
	/*
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
		}
	}
	*/

	/*
	sendLogin() => {
		var data = {
			"username": this.state.username,
			"password": this.state.password
		}
		fetch("/login/")
		)
	}
	*/

	// TODO: have a redirect to create acc
	//<p>Hello, {this.state.username}!</p>
	return (
		<div className="login">
			<div className="customer-login">
	   			<h2>
	   				C Login
	   			</h2>
	   			<form>
	   				<label for="username">Username: </label><br/>
	   				<input type="text" id="username" name="username" required/><br/>
	   				<label for="password">Password: </label><br/>
	   				<input type="password" id="password" name="password" required/><br/>
	   				<input type="submit" value="Log In"/>
	   			</form>
	   		</div>
	   		<div className="restaurant-login">
	   			<h2>
	   				R Login
	   			</h2>
	   			<form>
	   				<label for="username">Username: </label><br/>
	   				<input type="text" id="username" name="username" required/><br/>
	   				<label for="password">Password: </label><br/>
	   				<input type="password" id="password" name="password" required/><br/>
	   				<input type="submit" value="Log In"/>
	   			</form>
	   		</div>
	   		<div className="create-acc">
	   			<Link to="/create/">Create Account</Link>
	   		</div>
	   	</div>
	)
}

export default Login
