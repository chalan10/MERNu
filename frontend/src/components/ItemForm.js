import { useState } from "react";
import "./ItemForm.css";

function ItemForm({ menu, setMenu, menuCategory, menuItem, toggleAddItem, toggleEditItem, deleteItem, handleItemSubmit }) {
	const [ name, setName ] = useState(menuItem && menuItem.name);
	const [ description, setDescription ] = useState(menuItem && menuItem.description);
	const [ price, setPrice ] = useState(menuItem && menuItem.price);

	// Add Item
	if (!menuItem) {
		return (
			<form
				className="item-form"
				onSubmit={(e) => handleItemSubmit(e, {
					cid: menuCategory._id, name: name, description: description, price: price
				})}
			>
				<label>Item Name</label><br/>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label>Item Description</label><br/>
				<input
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<label>Item Price</label><br/>
				<input
					type="text"
					name="price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/><br/>
				<button onClick={() => toggleAddItem(menuCategory._id)}>
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
			<form
				className="item-form"
				onSubmit={(e) => handleItemSubmit(e, { iid: menuItem._id, cid: menuItem.cid, name: name, description: description, price: price })}
			>
				<label>Item Name</label><br/>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/><br/>
				<label>Item Description</label><br/>
				<input
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/><br/>
				<label>Item Price</label><br/>
				<input
					type="text"
					name="price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/><br/>
				<button onClick={() => toggleEditItem(menuItem.cid, menuItem._id)}>
					Cancel
				</button>
				<button
					onClick={() => deleteItem(menuItem.cid, menuItem._id)}
					style={{ backgroundColor: "crimson" }}
				>
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
