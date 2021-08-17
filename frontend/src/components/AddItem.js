import { useState } from "react";
import ItemForm from "./ItemForm.js";
import "./AddItem.css";

function AddItem({ menuCategory, /*handleItemSubmit,*/ menuItems, setMenuItems }) {
	const [ toggle, setToggle ] = useState(false);

	function toggleForm() {
		setToggle(!toggle);
	}

	return (
		<div className="add-item">
			<button className="add-item-btn" onClick={toggleForm}>
				<h2>Add Item</h2>
			</button>
			{toggle &&
				<ItemForm
					menuCategory={menuCategory}
					//handleItemSubmit={handleItemSubmit}
					menuItems={menuItems}
					setMenuItems={setMenuItems}
					toggleForm={toggleForm}
				/>
			}
		</div>
	);
}

export default AddItem;
