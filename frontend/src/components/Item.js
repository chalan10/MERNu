import EditItem from "./EditItem.js";
import "./Item.css";

//{`$${menuItem.price}`}<br/>
function Item({ menuItem, menuItems, setMenuItems, toggleEditItem, deleteItem, handleItemSubmit }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem
				menuItem={menuItem}
				menuItems={menuItems}
				setMenuItems={setMenuItems}
				toggleEditItem={toggleEditItem}
				deleteItem={deleteItem}
				handleItemSubmit={handleItemSubmit}
			/>
		</div>
	);
}

export default Item;
