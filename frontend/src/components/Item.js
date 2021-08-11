import EditItem from "./EditItem.js";
import "./Item.css";

//{`$${menuItem.price}`}<br/>
function Item({ menuItem, setMenuItem, deleteItem, toggleEditItem }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem
				menuItem={menuItem}
				setMenuItem={setMenuItem}
				deleteItem={deleteItem}
				toggleEditItem={toggleEditItem}
			/>
		</div>
	);
}

export default Item;
