import { useState } from "react";
import "./ItemForm.css";

// TODO: if menuItem not given, then it is addItem, else editItem
function ItemForm({ menuCategory, toggleShowAddItem, menuItem, setMenuItem, toggleItemForm, deleteItem }) {
	const [ name, setName ] = useState(menuItem && menuItem.name);
	const [ description, setDescription ] = useState(menuItem && menuItem.description);
	const [ price, setPrice ] = useState(menuItem && menuItem.price);
	/*
	 * Added menuItems as a prop to ItemForm for these to work
	function editName(value) {
		setMenuItem(
			{ ...menuItem, name: value }
		);
	}
	*/
	/*
	 * This one worked to dynamically change menuItem.name
	function editName(id, value) {
		setMenuItem(
			menuItems.map((item) =>
				item.id === id ? { ...item, name: value } : item
			)
		);
	}
	*/
	// Add Item
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
	// Edit Item
	if (menuItem) {
		return (
			<form className="item-form">
				<label>Item Name</label><br/>
				<input
					type="text"
					name="item-name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label>Item Description</label><br/>
				<input
					type="text"
					name="item-description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<label>Item Price</label><br/>
				<input
					type="text"
					name="item-price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/><br/>
				<button onClick={() => toggleItemForm(menuItem.id)}>
					Cancel
				</button>
				<button onClick={() => deleteItem(menuItem.id)} style={{ backgroundColor: "crimson" }}>
					Delete
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
