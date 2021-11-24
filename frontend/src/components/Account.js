import { useState, useEffect } from "react"
import axios from "axios"
import AccountForm from "./AccountForm.js"
import "./Account.css"

function Account({ username, name, setName, type }) {
	// TODO: customers will have blank descriptions that won't be displayed
	// or should we make sure that they don't at all?
	const [ description, setDescription ] = useState()
	const [ edit, setEdit ] = useState(false)

	useEffect(() => {
		axios.get(`http://localhost:5000/api/${type}/${username}`)
			.then(res => {
				setName(res.data.name)
				setDescription(res.data.description)
			})
			.catch(err => console.log("Fetch Account Error", err))
	}, [username, type, setName])

	function handleSubmit(e, data) {
		e.preventDefault()
		const editedAccount = {
			name: data.name,
			description: data.description
		}
		axios.put(`http://localhost:5000/api/${type}/${username}`, editedAccount)
			.then(res => {
				setName(data.name)
				setDescription(data.description)
			})
			.catch(err => console.log("Edit Account Error", err))
		setEdit(false)
	}

	return(
		<div>
			<h2>Account Page</h2>
			<button onClick={() => setEdit(!edit)}>Edit</button>
			{edit ?
				<AccountForm
					type={type}
					edit={edit}
					setEdit={setEdit}
					name={name}
					description={description}
					handleSubmit={handleSubmit}
				/>
			:
				<div>
					Name:<br/>
					{name}
					<br/><br/>
				{type === "restaurant" &&
					<div>
						Description:<br/>
						{description}
					</div>
				}
				</div>
			}
		</div>
	)
}

export default Account
