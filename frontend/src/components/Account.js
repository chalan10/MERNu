import { useState/*, useEffect*/ } from "react"
import axios from "axios"
import "./Account.css"

function Account() {
	//const [ account, setAccount ] = useState([])
	const [ name, setName ] = useState()
	const [ description, setDescription ] = useState()

	function fetchAccount(rid) {
		axios.get(`http://localhost:5000/api/restaurant/${rid}`)
			.then(res => console.log(res))
			.catch(err => console.log("Fetch Account Error", err))
	}

	return(
		<div>
			<h2>Account Page</h2>
			<div>
				Name: {name}
				<br/>
				Description: {description}
			</div>
		</div>
	)
}

export default Account
