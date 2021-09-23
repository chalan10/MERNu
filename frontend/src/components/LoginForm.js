import { useState } from "react"
import "./LoginForm.css"

function LoginForm({ handleLogin }) {
	const [ username, setUsername ] = useState()
	const [ password, setPassword ] = useState()

	return(
	   	<form onSubmit={e => handleLogin(e, { username: username, password: password })}>
	   		<label>Username: </label><br/>
	   		<input
				type="text"
				name="username"
				required
				value={username}
				onChange={e => setUsername(e.target.value)}
			/><br/>
	   		<label>Password: </label><br/>
	   		<input
				type="password"
				name="password"
				required
				value={password}
				onChange={e => setPassword(e.target.value)}
			/><br/>
	   		<input type="submit" value="Log In"/>
	   	</form>
	)
}

export default LoginForm
