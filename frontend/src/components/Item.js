import EditItem from "./EditItem.js";
import "./Item.css";

function Item({ menuItem, showEdit, onEdit }) {
	return (
		<div className="item">
			{menuItem.name}<br/>
			{menuItem.description}<br/>
			${menuItem.price}<br/>
			<EditItem menuItem={menuItem} showEdit={showEdit} onEdit={onEdit}/>
		</div>
	);
}

export default Item;
