import "./EditItem.css";

function EditItem({ menuItem, setMenuItems, toggleEditItem }) {
	return (
		<div className="edit">
			<button className="edit-button" onClick={() => toggleEditItem(menuItem.id)}>
				Edit Item Button
			</button>
			{menuItem.edit &&
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
					<button onClick={toggleEditItem}>
						Cancel
					</button>
					<input type="submit" value="Save" style={{ backgroundColor: "skyblue" }}/>
				</form>
			}
		</div>
	);
}

export default EditItem;
