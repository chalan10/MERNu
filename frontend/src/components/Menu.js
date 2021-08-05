import { useState } from "react";
import Category from "./Category.js";
import AddCategory from "./AddCategory.js";
import "./Menu.css";

function Menu() {
	// TODO: use nested state or two separate states for category and item?
	const [ menuCategories, setMenuCategories ] = useState([
		{
			id: 1,
			name: "Appetizers",
			description: "Description",
			/*
			items: [
				{
					id: 1,
					category: 1,
					name: "French Fries",
					description: "Appetizer",
					price: 3.99,
					edit: false
				},
			],
			*/
			edit: false
		},
		{
			id: 2,
			name: "Entrees",
			description: "Description",
			/*
			items: [
				{
					id: 2,
					category: 2,
					name: "Burger",
					description: "Entree",
					price: 8.99,
					edit: false
				},
			],
			*/
			edit: false
		},
		{
			id: 3,
			name: "Dessert",
			description: "Description",
			/*
			items: [
				{
					id: 3,
					category: 3,
					name: "Ice Cream",
					description: "Dessert",
					price: 2.99,
					edit: false
				},
			],
			*/
			edit: false
		},
		{
			id: 4,
			name: "Beverages",
			description: "Description",
			/*
			items: [
				{
					id: 4,
					category: 4,
					name: "Soda",
					description: "Beverage",
					price: 1.99,
					edit: false
				},
			],
			*/
			edit: false
		}
	]);

	const [ showAddCategory, setShowAddCategory ] = useState();
	function toggleShowAddCategory() {
		setShowAddCategory(!showAddCategory);
	}
	// TODO: on delete category, delete all items in that category
	function deleteCategory(id) {
		setMenuCategories(menuCategories.filter((menuCategory) => menuCategory.id !== id))
	}

	const [ menuItems, setMenuItems ] = useState([
		{
			id: 1,
			category: 1,
			name: "French Fries",
			description: "Appetizer",
			price: 3.99,
			edit: false
		},
		{
			id: 2,
			category: 2,
			name: "Burger",
			description: "Entree",
			price: 8.99,
			edit: false
		},
		{
			id: 3,
			category: 3,
			name: "Ice Cream",
			description: "Dessert",
			price: 2.99,
			edit: false
		},
		{
			id: 4,
			category: 4,
			name: "Soda",
			description: "Beverage",
			price: 1.99,
			edit: false
		}
	]);

	function deleteItem(id) {
		setMenuItems(menuItems.filter((menuItem) => menuItem.id !== id))
	}
	function toggleEditItem(id) {
		setMenuItems(
			menuItems.map((menuItem) =>
				menuItem.id === id ? { ...menuItem, edit: !menuItem.edit } : menuItem
			)
		);
	}

	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
				<AddCategory
					showAddCategory={showAddCategory}
					toggleShowAddCategory={toggleShowAddCategory}
				/>
			</div>
			<div className="menu-categories">
				{menuCategories.map((category) => {
					return (
						<Category
							menuCategory={category}
							setMenuCategory={setMenuCategories}
							deleteCategory={deleteCategory}
							menuItems={menuItems}
							setMenuItems={setMenuItems}
							deleteItem={deleteItem}
							toggleEditItem={toggleEditItem}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
