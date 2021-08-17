import EditItem from "./EditItem.js";
import "./Item.css";

//{`$${menuItem.price}`}<br/>
function Item({ menuItem, menuItems, setMenuItems, deleteItem, /*handleItemSubmit*/ }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem
				menuItem={menuItem}
				setMenuItems={setMenuItems}
				deleteItem={deleteItem}
				//handleItemSubmit={handleItemSubmit}
				menuItems={menuItems}
			/>
		</div>
	);
}

export default Item;
