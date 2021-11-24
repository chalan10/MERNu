import { useState, useEffect } from "react"
import OrderMenu from "./OrderMenu.js"
import Cart from "./Cart.js"
import axios from "axios"
import "./Order.css"

// TODO: allow customers to edit their cart- change quantity of an item, cancel order, submit

//TODO: after refreshing page, attempting to place an order, 401 err prevents fetching of restaurants data
//actually applies to everything
function Order({ username }) {
	const [ restaurants, setRestaurants ] = useState([])
	const [ rid, setRid ] = useState("")
	const [ restaurant, setRestaurant ] = useState("")
	const [ description, setDescription ] = useState("")

	const emptyCart = { oid: "order._id", cid: username, rid: restaurant._id, items: [], total: 0.0 }
	const [ order, setOrder ] = useState(emptyCart)
	const [ toggleCart, setToggleCart ] = useState(false)

	useEffect(() => {
		axios.get(`http://localhost:5000/api/restaurant`)
			.then(res => {
				// TODO: this sends sensitive restaurant data to customer, find a better way
				console.log("Restaurants", res.data)
				setRestaurants(res.data)
			})
			.catch(err => console.log("Fetch Restaurants Error", err))
	}, [])

	function showRestaurants() {
		return(
			<div className="restaurants">
				<h3>Restaurants</h3>
				{restaurants.map(restaurant => (
					<div key={restaurant._id} onClick={() => selectRestaurant(restaurant)}>
						{restaurant.name}
					</div>
				))}
			</div>
		)
	}

	function selectRestaurant(restaurant) {
		setRid(restaurant._id)
		setRestaurant(restaurant.name)
		setDescription(restaurant.description)
		// TODO: have to generate _id for our order in db, i forgot how to do it :) do we do it here or 
		// in backend (probably) and send it back to frontend?
		// double check how we init this thing
		setOrder(emptyCart)
	}

	function showSelectedRestaurant() {
		return(
			<div>
				<div className="selected-restaurant">
					<h3>{restaurant}</h3>
					<p>{description}</p>
					<OrderMenu
						username={username}
						rid={rid}
						order={order}
						setOrder={setOrder}
						addToOrder={addToOrder}
					/>
					<button onClick={() => returnToRestaurants()}>
						Return to Restaurants
					</button>
				</div>
				<button onClick={() => setToggleCart(!toggleCart)}>Cart</button>
			</div>
		)
	}

	function returnToRestaurants() {
		if (order.items.length === 0 || window.confirm("Leaving will delete current order.")) {
			setRid("")
			setRestaurant("")
			setDescription("")
			setOrder(emptyCart)
			setToggleCart(false)
		}
	}

	function showCart() {
		return(
			<Cart
				order={order}
				addToOrder={addToOrder}
				removeFromOrder={removeFromOrder}
				incrementQuantity={incrementQuantity}
				decrementQuantity={decrementQuantity}
				cancelOrder={cancelOrder}
			/>
		)
	}

	function addToOrder(menuItem) {
		// TODO: item._id atm as we stick the entirety of menuItem in order
		// change this to match our order schema later
		if (!order.items.some(item => item._id === menuItem._id)) {
			setOrder({
				...order,
				items: [
					...order.items,
					{
						_id: menuItem._id,
						name: menuItem.name,
						price: menuItem.price,
						quantity: 1
					}
				],
				total: order.total + menuItem.price
			})
		}
		else {
			incrementQuantity(menuItem)
		}
	}

	function incrementQuantity(menuItem) {
		// TODO: item._id atm as we stick the entirety of menuItem in order
		// change this to match our order schema later
		if (order.items.some(item => item._id === menuItem._id)) {
			setOrder({
				...order,
				items: order.items.map(item =>
					item._id === menuItem._id ?
					{ ...item, quantity: item.quantity + 1 } :
					item
				),
				total : order.total + menuItem.price
			})
		}
	}

	// Remove item from order, no matter the quantity
	function removeFromOrder(menuItem) {
		const itemToRemove = order.items.find(item => item._id === menuItem._id)

		if (itemToRemove) {
			setOrder({
				...order,
				items: order.items.filter(item => item._id !== menuItem._id),
				total: order.total - (itemToRemove.quantity * menuItem.price)
			})
		}
	}

	// TODO
	function decrementQuantity(menuItem) {
		const itemToRemove = order.items.find(item => item._id === menuItem._id)
		// Removing last one of an item should remove it from items list
		if (itemToRemove.quantity === 1) {
			setOrder({
				...order,
				items: order.items.filter(item => item._id !== menuItem._id),
				total: order.total - menuItem.price
			})
		}
		// Otherwise, just decrement quantity by one
		else {
			setOrder({
				...order,
				items: order.items.map(item =>
					item._id === menuItem._id ?
					{ ...item, quantity: item.quantity - 1 } :
					item
				),
				total: order.total - menuItem.price
			})
		}
	}

	function cancelOrder() {
		if (order.items.length > 0 && window.confirm("Cancel order?")) {
			setOrder(emptyCart)
		}
	}

	return(
		<div className="order">
			<h2>Place Order</h2>
			{restaurant === "" ? showRestaurants() : showSelectedRestaurant()}
			{toggleCart && showCart()}
		</div>
	)
}

export default Order
