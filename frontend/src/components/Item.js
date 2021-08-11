import EditItem from "./EditItem.js";
import "./Item.css";

//{`$${menuItem.price}`}<br/>
function Item({ menuItem, setMenuItem, deleteItem, toggleEditItem }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem menuItem={menuItem} setMenuItem={setMenuItem} toggleEditItem={toggleEditItem}/>
			<button onClick={() => deleteItem(menuItem.id)}>
				Delete
			</button>
		</div>
	);
}

export default Item;
