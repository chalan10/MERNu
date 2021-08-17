import { useState } from "react";
import "./ItemForm.css";

function ItemForm({ menuCategory, menuItem, menuItems, setMenuItems, deleteItem, toggleForm }) {
	const [ name, setName ] = useState(menuItem && menuItem.name);
	const [ description, setDescription ] = useState(menuItem && menuItem.description);
	const [ price, setPrice ] = useState(menuItem && menuItem.price);

	function handleSubmit(e, data) {
		e.preventDefault();
		// Add Item
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			setMenuItems([
				...menuItems,
				{
					id: rid,
					category: data.category,
					name: data.name,
					description: data.description,
					price: data.price,
				}
			]);
			console.log(data);
			console.log(menuItems);
		}
		// Edit Item
		else {
			setMenuItems(
				menuItems.map((menuItem) =>
					menuItem.id === data.id ?
					{ 
						...menuItem,
						name: data.name,
						description: data.description,
						price: data.price,
					} :
					menuItem
				)
			);
			console.log(data);
			console.log(menuItems);
		}
	}

	// Add Item
	if (!menuItem) {
		return (
			<form
				className="item-form"
				onSubmit={(e) => handleSubmit(e, { category: menuCategory.id, name: name, description: description, price: price })}
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
				<button onClick={toggleForm}>
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
				onSubmit={(e) => handleSubmit(e, { id: menuItem.id, category: menuItem.category, name: name, description: description, price: price })}
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
				<button onClick={toggleForm}>
					Cancel
				</button>
				<button
					onClick={() => deleteItem(menuItem.id)}
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
