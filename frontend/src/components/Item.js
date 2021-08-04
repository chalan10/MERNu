import EditItem from "./EditItem.js";
import "./Item.css";

function Item({ menuItem, setMenuItems, toggleEditItem, deleteItem }) {
	return (
		<div className="item">
			<button onClick={() => deleteItem(menuItem.id)}>
				Delete
			</button><br/>
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem menuItem={menuItem} setMenuItems={setMenuItems} toggleEditItem={toggleEditItem}/>
		</div>
	);
}

export default Item;
