import { useState } from "react";
import Item from "./Item.js";
import AddItem from "./AddItem.js";
import EditCategory from "./EditCategory.js";
import "./Category.css";

function Category({ menuCategory, setMenuCategory, deleteCategory, toggleEditCategory, toggleShowAddItem,
					menuItems, setMenuItems, deleteItem, toggleEditItem }) {
	/*
	const [ showAddItem, setShowAddItem ] = useState();
	function toggleShowAddItem() {
		setShowAddItem(!showAddItem);
	}
	*/

	return (
		<div className="category">
			<div className="category-header">
				<h2>
					{menuCategory.name}<br/>
				</h2>
				<EditCategory
					menuCategory={menuCategory}
					setMenuCategory={setMenuCategory}
					toggleEditCategory={toggleEditCategory}
				/>
				<button className="category-btn" onClick={() => deleteCategory(menuCategory.id)}>
					Delete Category
				</button>
			</div>
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
			<AddItem menuCategory={menuCategory} toggleShowAddItem={toggleShowAddItem}/>
		</div>
	);
}

export default Category;
