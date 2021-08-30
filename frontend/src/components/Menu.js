import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category.js";
import AddCategory from "./AddCategory.js";
import "./Menu.css";

function Menu() {
	const [ menu, setMenu ] = useState([]);

	const [ showAddCategory, setShowAddCategory ] = useState(false);
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

	function toggleAddItem(cid) {
		setShowAddCategory(false);
		setMenu(
			menu.map(menuCategory =>
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
			menu.map(menuCategory =>
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

	// TODO: item id contained by category or by menu?
	function toggleEditItem(cid, iid) {
		setShowAddCategory(false);
		setMenu(
			menu.map(menuCategory =>
				menuCategory.id === cid ?
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						menuItem.id === iid ?
						{ ...menuItem, edit: !menuItem.edit } :
						{ ...menuItem, edit: false }
					),
					edit: false,
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
			/*
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
			console.log(menu);
			setShowAddCategory(false);
			*/
			const rid = Math.floor(Math.random() * 10000) + 1;
			const newCategory = {
				id: rid,
				name: data.name,
				description: data.description,
				items: [],
				edit: false,
				addItem: false
			};
			axios.post("http://localhost:5000/api/menu/", newCategory)
				.then(res => {
					console.log("Add Category", res);
					console.log(res.data);
					setMenu([ ...menu, newCategory ]);
					console.log("Menu", menu);
					setShowAddCategory(false);
				})
				.catch(err => console.log(err))
		}
		// Edit Category
		else {
			setMenu(
				menu.map((menuCategory) => 
					menuCategory.id === data.cid ?
					{
						...menuCategory,
						name: data.name,
						description: data.description,
						edit: false,
						addItem: false
					} :
					menuCategory
				)
			);
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
			setMenu(
				menu.map(menuCategory =>
					menuCategory.id === data.cid ?
					{
						...menuCategory,
						items: [ ...menuCategory.items, newItem ],
						edit: false,
						addItem: false
					} :
					menuCategory
				)
			);
		}
		// Edit Item
		else {
			setMenu(
				menu.map(menuCategory =>
					({
						...menuCategory,
						items: menuCategory.items.map(menuItem =>
							menuItem.id === data.iid ?
							{ 
								...menuItem,
								name: data.name,
								description: data.description,
								price: data.price,
								edit: false
							} :
							menuItem
						),
						edit: false,
						addItem: false
					})
				)
			);
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

	/* Fetch Menu
	useEffect(() => {
		fetch("http://localhost:5000/")
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMenu(data.menu);
			});
	}, []);
	*/

	// Fetch Menu using axios
	useEffect(() => {
		axios.get("http://localhost:5000/api/menu/")
			.then(res => {
				console.log("Fetch Data", res);
				setMenu(res.data.menu);
			})
			.catch(err => console.log(err))
	}, []);

	/*
	// Add Item
	useEffect(() => {

	}, []);

	// Update Category
	useEffect(() => {

	}, []);

	// Update Item
	useEffect(() => {

	}, []);

	// Delete Category
	useEffect((cid) => {
		axios.delete("http://localhost:5000/")
			.then(() => {
				setMenu(menu.filter(menuCategory => menuCategory.id !== cid))
			})
	}, []);

	// Delete Item
	useEffect(() => {

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
