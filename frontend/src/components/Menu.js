import { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category.js";
import AddCategory from "./AddCategory.js";
import "./Menu.css";

function Menu() {
	const [ menu, setMenu ] = useState([]);

	// Fetch Menu
	useEffect(() => {
		axios.get("http://localhost:5000/api/menu/")
			.then(res => {
				//console.log("Fetch Data", res);
				setMenu(res.data);
			})
			.catch(err => console.log(err))
	}, []);

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
				menuCategory._id === cid ?
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
				menuCategory._id === cid ?
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
				menuCategory._id === cid ?
				{
					...menuCategory,
					items: menuCategory.items.map(menuItem =>
						menuItem._id === iid ?
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

	function deleteCategory(cid) {
		// TODO: how to make sure that when we delete, the component disappears only when
		// we actually delete it from db, atm if we get an error, it'll still remove comp
		axios.delete(`http://localhost:5000/api/menu/category/${cid}`)
			.then(res => {
				//console.log("Delete Category", res);
				//console.log(res.data);
			})
			.catch(err => console.log("Delete Category Error", err))
		setMenu(menu.filter(menuCategory => menuCategory._id !== cid));
	}

	function deleteItem(cid, iid) {
		// TODO: err
		axios.delete(`http://localhost:5000/api/menu/category/${cid}/item/${iid}`)
			.catch(err => console.log("Delete Item Error", err))
		setMenu(
			menu.map(menuCategory =>
				menuCategory._id === cid ?
				({
					...menuCategory,
					items: menuCategory.items.filter(menuItem => menuItem._id !== iid)
				})
				: menuCategory
			)
		);
	}

	function handleCategorySubmit(e, data) {
		e.preventDefault();
		// Add Category
		if (!data.cid) {
			const newCategory = {
				name: data.name,
				description: data.description,
				edit: false,
				addItem: false,
				items: []
			};
			axios.post("http://localhost:5000/api/menu/category", newCategory)
				.then(() => {
					//console.log("Add Category", res);
					//console.log(res.data);
					setMenu([ ...menu, newCategory ]);
					//console.log("Menu", menu);
					setShowAddCategory(false);
				})
				.catch(err => console.log("Add Category error", err))
		}
		// Edit Category
		else {
			const editedCategory = {
				_id: data.cid,
				name: data.name,
				description: data.description,
				edit: false,
				addItem: false,
				items: data.items
			}
			axios.put(`http://localhost:5000/api/menu/category/${data.cid}`, editedCategory)
				.then(res => {
					//console.log("Edit Category", res);
					//console.log(res.data);
					setMenu(
						menu.map(menuCategory => 
							menuCategory._id === data.cid ?
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
				})
				.catch(err => console.log("Edit Category Error", err))
		}
	}

	function handleItemSubmit(e, data) {
		e.preventDefault();
		// Add Item
		if (!data.iid) {
			//console.log("Add Item", data)
			const newItem = {
				cid: data.cid,
				name: data.name,
				description: data.description,
				price: parseFloat(data.price),
				edit: false
			};
			axios.post(`http://localhost:5000/api/menu/category/${data.cid}/item/`, newItem)
				.then(res => {
					setMenu(
						menu.map(menuCategory =>
							menuCategory._id === data.cid ?
							{
								...menuCategory,
								items: [ ...menuCategory.items, newItem ],
								edit: false,
								addItem: false
							} :
							menuCategory
						)
					);
				})
				.catch(err => console.log("Add Item Error", err))
		}
		// Edit Item
		else {
			const editedItem = {
				_id: data.iid,
				cid: data.cid,
				name: data.name,
				description: data.description,
				price: data.price,
				edit: false
			}
			//console.log(editedItem)
			axios.put(`http://localhost:5000/api/menu/category/${data.cid}/item/${data.iid}`, editedItem)
				.then(res => {
					setMenu(
						menu.map(menuCategory =>
							({
								...menuCategory,
								items: menuCategory.items.map(menuItem =>
									menuItem._id === data.iid ?
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
				})
				.catch(err => console.log("Edit Item Error", err))
		}
	}

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
