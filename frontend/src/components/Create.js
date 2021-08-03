import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Create.css";

class Create extends React.Component {
	render() {
		return(
			<div>
				<div className="account-creation">
					<h2>
						Account Creation
					</h2>
					<form>
						<label for="username">Username: </label><br/>
						<input type="text" id="username" name="username" required/><br/>
						<label for="password">Password: </label><br/>
						<input type="password" id="password" name="password" required/><br/>
						<label for="type">Account Type: </label><br/>
						<select name="type" id="type">
							<option value="0">Customer</option>
							<option value="1">Restaurant</option>
						</select><br/>
						<input type="submit" value="Create Account"/>
					</form>
				</div>
				<div className="login">
					<Link to="/">Return to Login</Link>
				</div>
			</div>
		);
	}
}

export default Create;
