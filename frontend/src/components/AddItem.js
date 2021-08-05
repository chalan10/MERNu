import "./AddItem.css";

function AddItem({ showAddItem, toggleShowAddItem }) {
	return (
		<div className="add-item">
			<button className="add-item-btn" onClick={toggleShowAddItem}>
				<h2>Add Item</h2>
			</button>
			{showAddItem &&
				<form className="add-item-form">
					<label>Item Name</label><br/>
					<input type="text"></input><br/>
					<label>Item Description</label><br/>
					<input type="text"></input><br/>
					<label>Item Price</label><br/>
					<input type="text"></input><br/>
					<button onClick={toggleShowAddItem}>
						Cancel
					</button>
					<input type="submit" value="Save"/>
				</form>
			}
		</div>
	);
}

export default AddItem;
