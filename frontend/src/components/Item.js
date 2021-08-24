import EditItem from "./EditItem.js";
import "./Item.css";

function Item({ menu, setMenu, menuCategory, menuItem, toggleEditItem, deleteItem, handleItemSubmit }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem
				menu={menu}
				setMenu={setMenu}
				menuCategory={menuCategory}
				menuItem={menuItem}
				toggleEditItem={toggleEditItem}
				deleteItem={deleteItem}
				handleItemSubmit={handleItemSubmit}
			/>
		</div>
	);
}

export default Item;
