import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import CreateForm from "./CreateForm.js"
import "./Create.css"

function Create() {
	const history = useHistory()

	function handleSubmit(e, data) {
		e.preventDefault()
		const newAccount = {
			username: data.username,
			password: data.password,
			type: data.type
		}
		axios.post("http://localhost:5000/create", newAccount)
			.then(history.push("/"))
			.catch(err => console.log("Account Creation Error", err))
	}

	return(
		<div className="create">
			<h2>Account Creation</h2>
			<CreateForm handleSubmit={handleSubmit}/>
			<Link to="/">Return to Login</Link>
		</div>
	)
}

export default Create
