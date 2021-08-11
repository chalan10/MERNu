import ItemForm from "./ItemForm.js";
import "./EditItem.css";

/* TODO: do we need to be able to edit item category? if we do, we'd need to pass
 * menuCategory so that each item knows which category it is in and which to change
 * its categoryId to
	<label>Item Category</label><br/>
	<select name="item-category">
		<option value="category">Category</option>
	</select><br/>
*/
/*	TODO: item modifiers optional
	<label>Item Modifiers</label><br/>
*/
function EditItem({ menuItem, setMenuItems, toggleEditItem }) {
	return (
		<div className="edit-item">
			<button className="edit-item-button" onClick={() => toggleEditItem(menuItem.id)}>
				Edit Item Button
			</button>
			{menuItem.edit &&
				<ItemForm menuItem={menuItem} setMenuItems={setMenuItems} toggleItemForm={toggleEditItem}/>
			}
		</div>
	);
}

export default EditItem;
