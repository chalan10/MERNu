import Item from "./Item.js";
import EditItem from "./EditItem.js";
import Category from "./Category.js";
import "./Menu.css";

function Menu({ menuItems, setMenuItems, toggleEditItem, deleteItem, showCategory, toggleCategory }) {
	// TODO: addItem
	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
				<Category showCategory={showCategory} toggleCategory={toggleCategory}/>
			</div>
			<div className="menu-items">
				{menuItems.map((item, index) => {
					return (
						<Item menuItem={item} setMenuItems={setMenuItems} toggleEditItem={toggleEditItem} deleteItem={deleteItem}/>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
