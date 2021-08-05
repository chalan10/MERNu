import EditItem from "./EditItem.js";
import "./Item.css";

//{`$${menuItem.price}`}<br/>
function Item({ menuItem, setMenuItem, deleteItem, toggleEditItem }) {
	return (
		<div className="item">
			<button onDoubleClick={() => deleteItem(menuItem.id)}>
				Delete
			</button><br/>
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem menuItem={menuItem} setMenuItem={setMenuItem} toggleEditItem={toggleEditItem}/>
		</div>
	);
}

export default Item;
