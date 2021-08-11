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
			description: "Appetizers Description",
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
			edit: false,
			addItem: false
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
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
			edit: false,
			addItem: false
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
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
			edit: false,
			addItem: false
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
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
			edit: false,
			addItem: false
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
	function toggleEditCategory(id) {
		setMenuCategories(
			menuCategories.map((menuCategory) =>
				menuCategory.id === id ? { ...menuCategory, edit: !menuCategory.edit } : menuCategory
			)
		);
	}
	function toggleShowAddItem(id) {
		setMenuCategories(
			menuCategories.map((menuCategory) =>
				menuCategory.id === id ? { ...menuCategory, addItem: !menuCategory.addItem } : menuCategory
			)
		);
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
		setMenuItems(menuItems.filter((menuItem) => menuItem.id !== id));
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
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					showAddCategory={showAddCategory}
					toggleShowAddCategory={toggleShowAddCategory}
				/>
			</div>
			<div className="menu-categories">
				{menuCategories.map((category) => {
					return (
						<Category
						/*
							menuCategories={menuCategories}
							setMenuCategories={setMenuCategories}
						*/
							menuCategory={category}
							setMenuCategory={setMenuCategories}
							deleteCategory={deleteCategory}
							toggleEditCategory={toggleEditCategory}
							toggleShowAddItem={toggleShowAddItem}
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
