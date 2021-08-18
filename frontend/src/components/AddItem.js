import ItemForm from "./ItemForm.js";
import "./AddItem.css";

function AddItem({ menuCategory, menuItems, setMenuItems, toggleAddItem, handleItemSubmit }) {
	return (
		<div className="add-item">
			<button className="add-item-btn" onClick={() => toggleAddItem(menuCategory.id)}>
				<h2>Add Item</h2>
			</button>
			{menuCategory.addItem &&
				<ItemForm
					menuCategory={menuCategory}
					menuItems={menuItems}
					setMenuItems={setMenuItems}
					toggleAddItem={toggleAddItem}
					handleItemSubmit={handleItemSubmit}
				/>
			}
		</div>
	);
}

export default AddItem;
