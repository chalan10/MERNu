import "./ItemForm.css";

// TODO: if menuItem not given, then it is addItem, else editItem
function ItemForm({ menuCategory, toggleShowAddItem, menuItem, setMenuItems, toggleItemForm }) {
	if (menuCategory) {
		return (
			<form className="item-form">
				<label>Item Name</label><br/>
				<input
					type="text"
					name="item-name"
				/><br/>
				<label>Item Description</label><br/>
				<input
					type="text"
					name="item-description"
				/><br/>
				<label>Item Price</label><br/>
				<input
					type="text"
					name="item-price"
				/><br/>
				<button onClick={() => toggleItemForm(menuCategory.id)}>
					Cancel
				</button>
				<input
					type="submit"
					value="Save"
					style={{ backgroundColor: "skyblue" }}
				/>
			</form>
		);
	}
	else if (menuItem) {
		return (
			<form className="item-form">
				<label>Item Name</label><br/>
				<input
					type="text"
					name="item-name"
					value={menuItem.name}
				/><br/>
				<label>Item Description</label><br/>
				<input
					type="text"
					name="item-description"
					value={menuItem.description}
				/><br/>
				<label>Item Price</label><br/>
				<input
					type="text"
					name="item-price"
					value={menuItem.price}
				/><br/>
				<button onClick={() => toggleItemForm(menuItem.id)}>
					Cancel
				</button>
				<input
					type="submit"
					value="Save"
					style={{ backgroundColor: "skyblue" }}
				/>
			</form>
		);
	}
}

export default ItemForm;
