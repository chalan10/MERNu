import { useState, useEffect } from "react";
import Category from "./Category.js";
import AddCategory from "./AddCategory.js";
import "./Menu.css";

function Menu() {
	// TODO: use nested state or two separate states for category and item?
	const [ menuCategories, setMenuCategories ] = useState([
		/*
		{
			id: 1,
			name: "Appetizers",
			description: "Appetizers Description",
			edit: false,
			addItem: false
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
			edit: false,
			addItem: false
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
			edit: false,
			addItem: false
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
			edit: false,
			addItem: false
		}
		*/
	]);

	const [ menuItems, setMenuItems ] = useState([
		/*
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
		*/
	]);

	const [showAddCategory, setShowAddCategory] = useState();
	function toggleAddCategory() {
		closeForms();
		setShowAddCategory(!showAddCategory);
	}

	// TODO: maybe have a single AddItem form like AddCategory instead of one per category
	// we're still having the issue of AddItem not actually rendering a new item,
	// console shows that we are adding to the menuItems list, but nothing new
	// is rendering on screen

	function toggleAddItem(id) {
		closeForms();
		setMenuCategories(
			menuCategories.map((menuCategory) =>
				menuCategory.id === id ?
				{ ...menuCategory, edit: false, addItem: !menuCategory.addItem } :
				{ ...menuCategory, edit: false, addItem: false }
			)
		);
	}

	function toggleEditCategory(id) {
		closeForms();
		setMenuCategories(
			menuCategories.map((menuCategory) =>
				menuCategory.id === id ?
				{ ...menuCategory, edit: !menuCategory.edit, addItem: false } :
				{ ...menuCategory, edit: false, addItem: false }
			)
		);
	}

	function toggleEditItem(id) {
		closeForms();
		setMenuItems(
			menuItems.map((menuItem) =>
				menuItem.id === id ?
				{ ...menuItem, edit: !menuItem.edit } :
				{ ...menuItem, edit: false }
			)
		);
	}

	// Closes all forms such that only one form is open at any given time to avoid clutter.
	function closeForms() {
		setShowAddCategory(false);
		setMenuItems(
			menuItems.map((menuItem) =>
				menuItem.edit ? { ...menuItem, edit: false } : menuItem
			)
		);
		setMenuCategories(
			menuCategories.map((menuCategory) =>
				(menuCategory.edit || menuCategory.addItem) ?
				{ ...menuCategory, edit: false, addItem: false } :
				menuCategory
			)
		);
	}

	function deleteCategory(id) {
		console.log(id);
		setMenuItems(menuItems.filter((menuItem) => menuItem.category !== id));
		setMenuCategories(menuCategories.filter((menuCategory) => menuCategory.id !== id));
	}

	function deleteItem(id) {
		setMenuItems(menuItems.filter((menuItem) => menuItem.id !== id));
	}

	function handleCategorySubmit(e, data) {
		e.preventDefault();
		// Add Category
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			const newCategory = {
				id: rid,
				name: data.name,
				description: data.description,
				edit: false,
				addItem: false
			};
			setMenuCategories([...menuCategories, newCategory]);
			//console.log(data);
			console.log(menuCategories);
		}
		// Edit Category
		else {
			setMenuCategories(
				menuCategories.map((menuCategory) => 
					menuCategory.id === data.id ?
					{
						...menuCategory,
						name: data.name,
						description: data.description
					} :
					menuCategory
				)
			);
			//console.log(data);
			//console.log(menuCategories);
		}
		//closeForms();
	}

	function handleItemSubmit(e, data) {
		e.preventDefault();
		// Add Item
		if (!data.id) {
			const rid = Math.floor(Math.random() * 10000) + 1;
			const newItem = {
				id: rid,
				category: data.category,
				name: data.name,
				description: data.description,
				price: parseFloat(data.price),
				edit: false
			};
			setMenuItems([...menuItems, newItem]);
			//console.log(data);
			console.log(menuItems);
		}
		// Edit Item
		else {
			setMenuItems(
				menuItems.map((menuItem) =>
					menuItem.id === data.id ?
					{ 
						...menuItem,
						name: data.name,
						description: data.description,
						price: data.price
					} :
					menuItem
				)
			);
			//console.log(data);
			//console.log(menuItems);
		}
		//closeForms();
	}

	/*
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks();
			//setTasks(tasksFromServer);
		}

		getTasks();
	}, []);

	// TODO: use .then or async/await
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:5000/api/items");
		const data = await res.json();

		console.log("fetching data...");
		console.log(data);
		return data;
	};
	*/

	//function fetchData() {
	/*
	var data = "nothing";
	useEffect(() => {
		data = fetch("http://localhost:5000");
		//const data = res.json();
		console.log("fetching data...");
		console.log(data);
		return data;
	}, []);
	*/

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
	useEffect(() => {
		fetch("http://localhost:5000/")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMenuCategories(data.categories);
				setMenuItems(data.items);
			});
	}, []);

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
					menuCategories={menuCategories}
					setMenuCategories={setMenuCategories}
					showAddCategory={showAddCategory}
					toggleAddCategory={toggleAddCategory}
					handleCategorySubmit={handleCategorySubmit}
				/>
			</div>
			<div className="menu-categories">
				{menuCategories.map((menuCategory) => {
					return (
						<Category
							menuCategory={menuCategory}
							menuCategories={menuCategories}
							setMenuCategories={setMenuCategories}
							toggleEditCategory={toggleEditCategory}
							deleteCategory={deleteCategory}
							handleCategorySubmit={handleCategorySubmit}
							menuItems={menuItems}
							setMenuItems={setMenuItems}
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
