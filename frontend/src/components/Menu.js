import { useState, useEffect } from "react";
import Category from "./Category.js";
import AddCategory from "./AddCategory.js";
import "./Menu.css";

function Menu() {
	const [ menu, setMenu ] = useState([
		{
			id: 1,
			name: "Appetizers",
			description: "Appetizers Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 1,
					category: 1,
					name: "French Fries",
					description: "Appetizer",
					price: 3.99,
					edit: false
				}
			]
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 2,
					category: 2,
					name: "Burger",
					description: "Entree",
					price: 8.99,
					edit: false
				}
			]
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 3,
					category: 3,
					name: "Ice Cream",
					description: "Dessert",
					price: 2.99,
					edit: false
				}
			]
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 4,
					category: 4,
					name: "Soda",
					description: "Beverage",
					price: 1.99,
					edit: false
				}
			]
		}
	]);

	const [ showAddCategory, setShowAddCategory ] = useState();
	function toggleAddCategory() {
		setMenu(
			menu.map(menuCategory =>
				({
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: false,
					addItem: false
				})
			)
		);
		setShowAddCategory(!showAddCategory);
	}

	// TODO: maybe have a single AddItem form like AddCategory instead of one per category
	// we're still having the issue of AddItem not actually rendering a new item,
	// console shows that we are adding to the menuItems list, but nothing new
	// is rendering on screen

	function toggleAddItem(cid) {
		setShowAddCategory(false);
		setMenu(
			menu.map((menuCategory) =>
				menuCategory.id === cid ?
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: false,
					addItem: !menuCategory.addItem
				} :
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: false,
					addItem: false
				}
			)
		);
	}

	function toggleEditCategory(cid) {
		setShowAddCategory(false);
		setMenu(
			menu.map((menuCategory) =>
				menuCategory.id === cid ?
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: !menuCategory.edit,
					addItem: false
				} :
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: false,
					addItem: false
				}
			)
		);
	}

	function toggleEditItem(cid, iid) {
		setShowAddCategory(false);
		setMenu(
			menu.map(menuCategory =>
				({
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						(menuCategory.id === cid && menuItem.id === iid) ?
						{ ...menuItem, edit: !menuItem.edit } :
						{ ...menuItem, edit: false }
					),
					edit: false,
					addItem: false
				})
			)
		);
	}

	// TODO: clean this up, too much redundancy; might need to just hardcode it
	// for every instance we need to close forms, including after submitting bc
	// closeForms() not working in those cases

	// Closes all forms such that only one form is open at any given time to avoid clutter.
	function closeForms() {
		setShowAddCategory(false);
		setMenu(
			menu.map(menuCategory =>
				({
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						({
							...menuItem,
							edit: false
						})
					),
					edit: false,
					addItem: false
				})
			)
		);
	}

	function deleteCategory(cid) {
		setMenu(menu.filter(menuCategory => menuCategory.id !== cid));
	}

	function deleteItem(iid) {
		setMenu(
			menu.map(menuCategory =>
				({
					...menuCategory,
					items: menuCategory.items.filter(menuItem => menuItem.id !== iid)
				})
			)
		);
	}

	function handleCategorySubmit(e, data) {
		e.preventDefault();
		// Add Category
		if (!data.cid) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			const newCategory = {
				id: rid,
				name: data.name,
				description: data.description,
				items: [],
				edit: false,
				addItem: false
			};
			setMenu([ ...menu, newCategory ]);
			//console.log(data);
			console.log(menu);
		}
		// Edit Category
		else {
			setMenu(
				menu.map((menuCategory) => 
					menuCategory.id === data.cid ?
					{
						...menuCategory,
						name: data.name,
						description: data.description
					} :
					menuCategory
				)
			);
			//console.log(data);
			//console.log(menu);
		}
		//closeForms();
	}

	function handleItemSubmit(e, data) {
		e.preventDefault();
		// Add Item
		if (!data.iid) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			const newItem = {
				id: rid,
				category: data.cid,
				name: data.name,
				description: data.description,
				price: parseFloat(data.price),
				edit: false
			};
			//setMenu([ ...menuItems, newItem ]);
			setMenu(
				menu.map(menuCategory =>
					menuCategory.id === data.cid ?
					{
						...menuCategory,
						items: [ ...menuCategory.items, newItem ]
					} :
					menuCategory
				)
			);
			//console.log(data);
			//console.log(menuItems);
		}
		// Edit Item
		else {
			setMenu(
				menu.map(menuCategory =>
					menuCategory.items.map(menuItem =>
						menuItem.id === data.id ?
						{ 
							...menuItem,
							name: data.name,
							description: data.description,
							price: data.price
						} :
						menuItem
					)
				)
			);
			//console.log(data);
			//console.log(menuItems);
		}
		//closeForms();
	}

	/* WORKS: backend connection from we first tried it with flask
	const [ message, setMessage ] = useState(0);
	useEffect(() => {
		fetch("http://localhost:5000/")
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setMessage(data.msg)
			});
	}, []);
	*/

	/* WORKS: this works too
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch("http://localhost:5000/");
			const data = await res.json();

			console.log(data);
		}

		fetchData();
	}, []);
	*/

	// Fetch Categories
	/*
	useEffect(() => {
		fetch("http://localhost:5000/")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMenuCategories(data.categories);
				setMenuItems(data.items);
			});
	}, []);
	*/

	/*
			<div>
				<h2>Backend Test</h2>
				{message}
			</div>
	*/
	return(
		<div className="menu">
			<div className="menu-header">
				<h2>Menu</h2>
				<AddCategory
					menu={menu}
					setMenu={setMenu}
					showAddCategory={showAddCategory}
					toggleAddCategory={toggleAddCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			</div>
			<div className="menu-categories">
				{menu.map((menuCategory) => {
					return (
						<Category
							menu={menu}
							setMenu={setMenu}
							menuCategory={menuCategory}
							toggleEditCategory={toggleEditCategory}
							deleteCategory={deleteCategory}
							handleCategorySubmit={handleCategorySubmit}
							toggleAddItem={toggleAddItem}
							toggleEditItem={toggleEditItem}
							deleteItem={deleteItem}
							handleItemSubmit={handleItemSubmit}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Menu;
