import { Link, useHistory } from "react-router-dom"
import axios from "axios"
import CreateForm from "./CreateForm.js"
import "./Create.css"

function Create() {
	const history = useHistory()

	if (localStorage.username) {
		// TODO: 401 every time we try to go to home page, what do?
		history.push(`/${localStorage.type}`)
	}

	function handleSubmit(e, data) {
		e.preventDefault()
		const newAccount = {
			username: data.username,
			name: data.name,
			password: data.password,
			type: data.type
		}
		axios.post(`http://localhost:5000/create/${data.type}`, newAccount)
			.then(res => {
				console.log(res.data)
				if (res.data.success) {
					history.push("/")
				}
				else {
					alert(res.data.msg)
				}
			})
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
