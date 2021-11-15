import { useState } from "react"
import "./AccountForm.css"

function AccountForm({ type, edit, setEdit, name, description, handleSubmit }) {
	const [ newName, setNewName ] = useState(name)
	const [ newDescription, setNewDescription ] = useState(description)
	
	function customerAccountForm() {
		return(
			<form onSubmit={e => handleSubmit(e, { name: newName, description: newDescription })}>
				<label>Name:</label><br/>
				<input
					type="text"
					name="name"
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/><br/><br/>

				<button onClick={() => setEdit(!edit)}>Cancel</button>
				<input
					type="submit"
					name="submit"
					value="Save"
				/>
			</form>
		)
	}

	function restaurantAccountForm() {
		return(
			<form onSubmit={e => handleSubmit(e, { name: newName, description: newDescription })}>
				<label>Name:</label><br/>
				<input
					type="text"
					name="name"
					value={newName}
					onChange={e => setNewName(e.target.value)}
				/><br/><br/>

				<label>Description:</label><br/>
				<input
					type="text"
					name="description"
					value={newDescription}
					onChange={e => setNewDescription(e.target.value)}
				/><br/>

				<button onClick={() => setEdit(!edit)}>Cancel</button>
				<input
					type="submit"
					name="submit"
					value="Save"
				/>
			</form>
		)
	}

	return(
		<div>
			{type === "customer" && customerAccountForm()}
			{type === "restaurant" && restaurantAccountForm()}
		</div>
	)
}

export default AccountForm
