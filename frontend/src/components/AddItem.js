import ItemForm from "./ItemForm.js";
import "./AddItem.css";

function AddItem({ menu, setMenu, menuCategory, toggleAddItem, handleItemSubmit }) {
	return (
		<div className="add-item">
			<button className="add-item-btn" onClick={() => toggleAddItem(menuCategory.id)}>
				<h2>Add Item</h2>
			</button>
			{menuCategory.addItem &&
				<ItemForm
					menu={menu}
					setMenu={setMenu}
					menuCategory={menuCategory}
					toggleAddItem={toggleAddItem}
					handleItemSubmit={handleItemSubmit}
				/>
			}
		</div>
	);
}

export default AddItem;
