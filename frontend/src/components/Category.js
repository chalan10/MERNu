import { useState } from "react";
import Item from "./Item.js";
import AddItem from "./AddItem.js";
import "./Category.css";

function Category({ menuCategory, setMenuCategory, deleteCategory,
					menuItems, setMenuItems, deleteItem, toggleEditItem }) {
	const [ showAddItem, setShowAddItem ] = useState();
	function toggleShowAddItem() {
		setShowAddItem(!showAddItem);
	}

	return (
		<div className="category">
			<h2>
				{menuCategory.name}<br/>
				<button className="delete-category-btn" onDoubleClick={() => deleteCategory(menuCategory.id)}>
					Delete Category
				</button>
			</h2>
			{menuItems.map((item) => {
				if (item.id === menuCategory.id) {
					return (
						<Item
							menuItem={item}
							setMenuItem={setMenuItems}
							deleteItem={deleteItem}
							toggleEditItem={toggleEditItem}
						/>
					);
				}
			})}
			<AddItem showAddItem={showAddItem} toggleShowAddItem={toggleShowAddItem}/>
		</div>
	);
}

export default Category;
