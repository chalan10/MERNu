import React from "react";
import "./Create.css";

class Create extends React.Component {
	render() {
		return(
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
		);
	}
}

export default Create;
