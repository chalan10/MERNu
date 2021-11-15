import { useState } from "react"
import "./CreateForm.css"

function CreateForm({ handleSubmit }) {
	const [ username, setUsername ] = useState()
	const [ name, setName ] = useState()
	const [ password, setPassword ] = useState()
	const [ type, setType ] = useState("customer")

	return(
		<form onSubmit={e => handleSubmit(e, { username: username, name: name, password: password, type: type })}>
			<label>Account Type:</label><br/>
			<select name="type" value={type} onChange={e => setType(e.target.value)}>
				<option value="customer">Customer</option>
				<option value="restaurant">Restaurant</option>
			</select><br/>

			<label>Username:</label><br/>
			<input
				type="text"
				name="username"
				value={username}
				required
				onChange={e => setUsername(e.target.value)}
			/><br/>

			<label>Name:</label><br/>
			<input
				type="text"
				name="name"
				value={name}
				required
				onChange={e => setName(e.target.value)}
			/><br/>

			<label>Password:</label><br/>
			<input
				type="password"
				name="password"
				value={password}
				required
				onChange={e => setPassword(e.target.value)}
			/><br/>

			<input type="submit" value="Create Account"/>
		</form>
	)
}

export default CreateForm
