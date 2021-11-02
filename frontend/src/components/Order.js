import { useState, useEffect } from "react"
import OrderMenu from "./OrderMenu.js"
import axios from "axios"
import "./Order.css"

function Order({ username }) {
	const [ restaurants, setRestaurants ] = useState([])
	const [ rid, setRid ] = useState("")
	const [ selectedRestaurant, setSelectedRestaurant ] = useState("")

	useEffect(() => {
		axios.get(`http://localhost:5000/api/restaurant`)
			.then(res => {
				console.log(res.data)
				setRestaurants(res.data)
			})
			.catch(err => console.log("Fetch Restaurants Error", err))
	}, [])

	function showRestaurants() {
		return(
			<div className="restaurants">
				<h3>Restaurants</h3>
				{restaurants.map(restaurant => {
					return(
						<div onClick={() => {
							setRid(restaurant._id)
							setSelectedRestaurant(restaurant.name)
						}}>
							{restaurant.name}
						</div>
					)
				})}
			</div>
		)
	}

	function showSelectedRestaurant() {
		return(
			<div className="selected-restaurant">
				<h3>{selectedRestaurant}</h3>
				<OrderMenu username={username} rid={rid} />
				<button onClick={() => {
					setRid("")
					setSelectedRestaurant("")
				}}>
					Return to Restaurants
				</button>
			</div>
		)
	}

	return(
		<div className="order">
			<h2>Place Order</h2>
			{selectedRestaurant === "" ? showRestaurants() : showSelectedRestaurant()}
		</div>
	)
}

export default Order
