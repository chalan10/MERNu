import { useState, useEffect } from "react"
//import Cart from "./Cart.js"
import axios from "axios"
//import "./OrderMenu.css"

// TODO: should we abstract this like the other menu? it's going to get messy
// but at the same time, if we do, our components folder is going to look just as messy
// maybe have subdirs for Customer and Restaurant relevant components and keep shared
// comps one level out?
// we'll see as we go with this one
// TODO: fix the formatting of the menu so it's like restaurant's menu
// TODO: should we have a cart component that is shown on the same page as the order menu
// or just send user to a different page to review their order
// and they can review and make their edits there?
// we can have both where cart allows for quick review and edits and have it lead to a confirmation page after
function OrderMenu({ username, rid, order, setOrder }) {
	const [ menu, setMenu ] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:5000/api/restaurant/${rid}`)
			.then(res => setMenu(res.data.menu))
			.catch(err => console.log("Fetch Menu Error", err))
	}, [username, rid])

	function addToOrder(menuItem) {
		// TODO: item._id atm as we stick the entirety of menuItem in order
		// change this to match our order schema later
		if (order.items.some(item => item._id === menuItem._id)) {
			setOrder({
				...order,
				items: order.items.map(item =>
					item._id === menuItem._id ?
					{ ...item, quantity: item.quantity + 1 } : item
				),
				total : order.total + menuItem.price
			})
			console.log("item already in order")
		}
		else {
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
			console.log("item added to order")
		}
		console.log(order) // TODO: seems to be behind by one, might be due to setState's async
	}

	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
			</div>
			<div className="menu-categories">
				{menu.map(menuCategory => (
					<div className="category">
						<div className="category-header">
							<h2>{menuCategory.name}</h2>
						</div>
						{menuCategory.items.map(menuItem => (
							<div className="item">
								{menuItem.name}<br/>
								{menuItem.description}<br/>
								${menuItem.price}<br/>
								<button onClick={() => addToOrder(menuItem)}>
									Add to Order
								</button>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default OrderMenu
