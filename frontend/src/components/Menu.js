import Item from "./Item.js";
import Category from "./Category.js";
import "./Menu.css";

function Menu({ menuItems, showEdit, onEdit, showCategory, toggleCategory }) {
	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
				<Category showCategory={showCategory} toggleCategory={toggleCategory}/>
			</div>
			<div className="menu-items">
				{menuItems.map((item, index) => {
					return (
						<Item menuItem={item} showEdit={showEdit} onEdit={onEdit}/>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
