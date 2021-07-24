import React from "react";
import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "user",
			password: "pass",
		};
	}

	render() {
		return(
			<div className="Login">
				<h2 className="Login-header">
				Login Page
				<p>Hello, {this.state.username}!</p>
				<form>
					<label for="username">Username: </label><br/>
					<input type="text" id="username" name="username" required/><br/>
					<label for="password">Password: </label><br/>
					<input type="password" id="password" name="password" required/><br/>
					<br/>
					<input type="submit" value="Login"/>
				</form>
				</h2>
			</div>
		);
	}
}

export default Login;
