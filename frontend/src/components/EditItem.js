import ItemForm from "./ItemForm.js";
import "./EditItem.css";

function EditItem({ menu, setMenu, menuCategory, menuItem, toggleEditItem, deleteItem, handleItemSubmit }) {
	return (
		<div className="edit-item">
			<button className="edit-item-btn" onClick={() => toggleEditItem(menuCategory.id, menuItem.id)}>
				Edit Item Button
			</button>
			{menuItem.edit &&
				<ItemForm
					menu={menu}
					setMenu={setMenu}
					menuCategory={menuCategory}
					menuItem={menuItem}
					toggleEditItem={toggleEditItem}
					deleteItem={deleteItem}
					handleItemSubmit={handleItemSubmit}
				/>
			}
		</div>
	);
}

export default EditItem;
