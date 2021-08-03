import { useState, useEffect } from "react";
import "./EditItem.css";

function EditItem({ menuItem, showEdit, onEdit }) {
	/*
	const [ state, setState ] = useState();

	function onChange() {
		setState(state.name);
	}
	*/

	return (
		<div className="edit">
			<button className="edit-button" onClick={onEdit}>
				Edit Item Button
			</button>
			{showEdit &&
				<form className="edit-menu">
					<label for="item-name">Item Name</label><br/>
					<input
						type="text"
						name="item-name"
						value={menuItem.name}
					/><br/>
					<label for="item-description">Item Description</label><br/>
					<input type="text" id="item-description" name="item-description" value={menuItem.description} required/><br/>
					<label for="item-price">Item Price</label><br/>
					<input type="text" id="item-price" name="item-price" value={menuItem.price} required/><br/>
					<button onClick={onEdit}>
						Cancel
					</button>
					<input type="submit" value="Save" style={{ backgroundColor: "skyblue" }}/>
				</form>
			}
		</div>
	);
}

export default EditItem;
