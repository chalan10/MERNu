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
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
		}
	]);

	const [ menuItems, setMenuItems ] = useState([
		{
			id: 1,
			category: 1,
			name: "French Fries",
			description: "Appetizer",
			price: 3.99,
		},
		{
			id: 2,
			category: 2,
			name: "Burger",
			description: "Entree",
			price: 8.99,
		},
		{
			id: 3,
			category: 3,
			name: "Ice Cream",
			description: "Dessert",
			price: 2.99,
		},
		{
			id: 4,
			category: 4,
			name: "Soda",
			description: "Beverage",
			price: 1.99,
		}
	]);

	function deleteCategory(id) {
		console.log(id);
		setMenuItems(menuItems.filter((menuItem) => menuItem.category !== id));
		setMenuCategories(menuCategories.filter((menuCategory) => menuCategory.id !== id));
	}

	function deleteItem(id) {
		setMenuItems(menuItems.filter((menuItem) => menuItem.id !== id));
	}

	/*
	function handleCategorySubmit(e, data) {
		e.preventDefault();
		// Add Category
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			setMenuCategories([
				...menuCategories,
				{
					id: rid,
					name: data.name,
					description: data.description,
				}
			]);
			console.log(data);
			console.log(menuCategories);
		}
		// Edit Category
		else {
			setMenuCategories(
				menuCategories.map((menuCategory) => 
					menuCategory.id === data.id
					? {
						...menuCategory,
						name: data.name,
						description: data.description
					}
					: menuCategory
				)
			);
			console.log(data);
			console.log(menuCategories);
		}
	}
	*/

	/*
	function handleItemSubmit(e, data) {
		e.preventDefault();
		// Add Item
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			setMenuItems([
				...menuItems,
				{
					id: rid,
					category: data.category,
					name: data.name,
					description: data.description,
					price: data.price,
				}
			]);
			console.log(data);
			console.log(menuItems);
		}
		// Edit Item
		else {
			setMenuItems(
				menuItems.map((menuItem) =>
					menuItem.id === data.id
					? { 
						...menuItem,
						name: data.name,
						description: data.description,
						price: data.price,
					}
					: menuItem
				)
			);
			console.log(data);
			console.log(menuItems);
		}
	}
	*/

	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
				<AddCategory
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					//handleCategorySubmit={handleCategorySubmit}
				/>
			</div>
			<div className="menu-categories">
				{menuCategories.map((menuCategory) => {
					return (
						<Category
							menuCategory={menuCategory}
							menuCategories={menuCategories}
							setMenuCategories={setMenuCategories}
							deleteCategory={deleteCategory}
							menuItems={menuItems}
							setMenuItems={setMenuItems}
							deleteItem={deleteItem}
							//handleCategorySubmit={handleCategorySubmit}
							//handleItemSubmit={handleItemSubmit}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
