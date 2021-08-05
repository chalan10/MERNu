import "./EditItem.css";

function EditItem({ menuItem, setMenuItems, toggleEditItem }) {
	return (
		<div className="edit">
			<button className="edit-button" onClick={() => toggleEditItem(menuItem.id)}>
				Edit Item Button
			</button>
			{menuItem.edit &&
				<form className="edit-form">
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
					<button onClick={() => toggleEditItem(menuItem.id)}>
						Cancel
					</button>
					<input
						type="submit"
						value="Save"
						style={{ backgroundColor: "skyblue" }}
					/>
				</form>
			}
		</div>
	);
}

export default EditItem;
