import ItemForm from "./ItemForm.js";
import "./AddItem.css";

function AddItem({ menuCategory, toggleShowAddItem }) {
	return (
		<div className="add-item">
			<button className="add-item-btn" onClick={() => toggleShowAddItem(menuCategory.id)}>
				<h2>Add Item</h2>
			</button>
			{menuCategory.addItem &&
				<ItemForm menuCategory={menuCategory} toggleItemForm={toggleShowAddItem}/>
			}
		</div>
	);
}

export default AddItem;
