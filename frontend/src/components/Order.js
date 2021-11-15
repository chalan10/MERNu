import { useState, useEffect } from "react"
import OrderMenu from "./OrderMenu.js"
import axios from "axios"
import "./Order.css"

//TODO: after refreshing page, attempting to place an order, 401 err prevents fetching of restaurants data
//actually applies to everything
function Order({ username }) {
	const [ restaurants, setRestaurants ] = useState([])
	const [ rid, setRid ] = useState("")
	const [ restaurant, setRestaurant ] = useState("")
	const [ description, setDescription ] = useState("")
	const [ order, setOrder ] = useState([])

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
				{restaurants.map(restaurant => (
					<div onClick={() => selectRestaurant(restaurant)}>
						{restaurant.name}
					</div>
				))}
			</div>
		)
	}

	function returnToRestaurants() {
		if (order.items.length === 0 || window.confirm("Leaving will delete current order.")) {
			setRid("")
			setRestaurant("")
			setDescription("")
			setOrder([])
		}
	}

	function selectRestaurant(restaurant) {
		setRid(restaurant._id)
		setRestaurant(restaurant.name)
		setDescription(restaurant.description)
		// TODO: have to generate _id for our order in db, i forgot how to do it :) do we do it here or 
		// in backend (probably) and send it back to frontend?
		// double check how we init this thing
		setOrder({ oid: "order._id", cid: username, rid: restaurant._id, items: [], total: 0.0 })
	}

	function showSelectedRestaurant() {
		return(
			<div className="selected-restaurant">
				<h3>{restaurant}</h3>
				<p>{description}</p>
				<OrderMenu username={username} rid={rid} order={order} setOrder={setOrder} />
				<button onClick={() => returnToRestaurants()}>
					Return to Restaurants
				</button>
			</div>
		)
	}

	return(
		<div className="order">
			<h2>Place Order</h2>
			{restaurant === "" ? showRestaurants() : showSelectedRestaurant()}
		</div>
	)
}

export default Order
