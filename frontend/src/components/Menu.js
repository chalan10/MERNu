import { useState, useEffect } from "react"
import axios from "axios"
import Category from "./Category.js"
import AddCategory from "./AddCategory.js"
import "./Menu.css"

function Menu({ rid }) {
	const [ menu, setMenu ] = useState([])

	useEffect(() => {
		axios.get(`http://localhost:5000/api/restaurant/${rid}`)
			.then(res => setMenu(res.data.menu))
			.catch(err => console.log("Fetch Menu Error", err))
	}, [rid])

	const [ showAddCategory, setShowAddCategory ] = useState(false)
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
		)
		setShowAddCategory(!showAddCategory)
	}

	function toggleAddItem(cid) {
		setShowAddCategory(false)
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
		)
	}

	function toggleEditCategory(cid) {
		setShowAddCategory(false)
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
		)
	}

	function toggleEditItem(cid, iid) {
		setShowAddCategory(false)
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
		)
	}

	function deleteCategory(cid) {
		axios.delete(`http://localhost:5000/api/restaurant/${rid}/category/${cid}`)
			.catch(err => console.log("Delete Category Error", err))
		setMenu(menu.filter(menuCategory => menuCategory._id !== cid))
	}

	function deleteItem(cid, iid) {
		axios.delete(`http://localhost:5000/api/restaurant/${rid}/category/${cid}/item/${iid}`)
			.catch(err => console.log("Delete Item Error", err))
		setMenu(
			menu.map(menuCategory =>
				menuCategory._id === cid ?
				({
					...menuCategory,
					items: menuCategory.items.filter(menuItem => menuItem._id !== iid)
				}) :
				menuCategory
			)
		)
	}

	function handleCategorySubmit(e, data) {
		e.preventDefault()
		// Add Category
		if (!data.cid) {
			const newCategory = {
				_id: rid,
				name: data.name,
				description: data.description,
				edit: false,
				addItem: false,
				items: []
			}
			axios.post(`http://localhost:5000/api/restaurant/${rid}/category`, newCategory)
				.then(res => {
					setMenu([ ...menu, res.data ])
					setShowAddCategory(false)
				})
				.catch(err => console.log("Add Category error", err))
		}
		// Edit Category
		else {
			const editedCategory = {
				//_id: data.cid,
				name: data.name,
				description: data.description
				/*
				edit: false,
				addItem: false,
				items: data.items
				*/
			}
			axios.put(`http://localhost:5000/api/restaurant/${rid}/category/${data.cid}`, editedCategory)
				.then(res => {
					setMenu(
						menu.map(menuCategory => 
							menuCategory._id === data.cid ?
							{
								...menuCategory,
								/*
								name: res.data.name,
								description: res.data.description,
								*/
								name: res.data.name,
								description: res.data.description,
								edit: false,
								addItem: false
							} :
							menuCategory
						)
					)
				})
				.catch(err => console.log("Edit Category Error", err))
		}
	}

	function handleItemSubmit(e, data) {
		e.preventDefault()
		// Add Item
		if (!data.iid) {
			const newItem = {
				cid: data.cid,
				name: data.name,
				description: data.description,
				price: parseFloat(data.price),
				edit: false
			}
			axios.post(`http://localhost:5000/api/restaurant/${rid}/category/${data.cid}/item/`, newItem)
				.then(res => {
					console.log(res)
					setMenu(
						menu.map(menuCategory =>
							menuCategory._id === data.cid ?
							{
								...menuCategory,
								items: [ ...menuCategory.items, res.data ],
								edit: false,
								addItem: false
							} :
							menuCategory
						)
					)
				})
				.catch(err => console.log("Add Item Error", err))
		}
		// Edit Item
		else {
			const editedItem = {
				/*
				_id: data.iid,
				cid: data.cid,
				*/
				name: data.name,
				description: data.description,
				price: data.price,
				//edit: false
			}
			axios.put(`http://localhost:5000/api/restaurant/${rid}/category/${data.cid}/item/${data.iid}`, editedItem)
				.then(res => {
					setMenu(
						menu.map(menuCategory =>
							menuCategory._id === res.data.cid ?
							{
								...menuCategory,
								items: menuCategory.items.map(menuItem =>
									//menuItem._id === data.iid ?
									menuItem._id === res.data._id ?
									{ 
										...menuItem,
										/*
										name: data.name,
										description: data.description,
										price: data.price,
										*/
										name: res.data.name,
										description: res.data.description,
										price: res.data.price,
										edit: false
									} :
									menuItem
								),
								edit: false,
								addItem: false
							} :
							menuCategory
						)
					)
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
				{menu.map(menuCategory => {
					return (
						<Category
							key={menuCategory._id}
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
					)
				})}
			</div>
		</div>
	)
}

export default Menu
