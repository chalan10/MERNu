function CartItem({ item, removeFromOrder, incrementQuantity, decrementQuantity }) {
	return(
		<div className="cart-item">
			<b>Item Name:</b> {item.name}<br/>
			<b>Item Price:</b> {item.price.toFixed(2)}<br/>
			<b>Quantity:</b>
				<button onClick={() => decrementQuantity(item)} className="dec-quantity">-</button>
				{item.quantity}
				<button onClick={() => incrementQuantity(item)} className="inc-quantity">+</button>
			<br/>
			<button onClick={() => removeFromOrder(item)}>Remove Item</button><br/>
			<br/>
		</div>
	)
}

export default CartItem
