import CartItem from "./CartItem.js"
import "./Cart.css"

function Cart({ order, removeFromOrder, incrementQuantity, decrementQuantity, cancelOrder }) {
	return(
		<div className="cart">
			<h2>Cart</h2>
			{order.items.map(item => (
				<CartItem
					key={item._id}
					item={item}
					removeFromOrder={removeFromOrder}
					incrementQuantity={incrementQuantity}
					decrementQuantity={decrementQuantity}
				/>
			))}
			<b>Order Total:</b> {Math.abs(order.total).toFixed(2)}<br/>
			<button onClick={() => cancelOrder()}>Cancel Order</button>
			<button>Place Order</button>
		</div>
	)
}

export default Cart
