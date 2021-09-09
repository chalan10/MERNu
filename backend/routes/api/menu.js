const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Menu = require("../../models/Menu.js")

// TODO: /api/menu/:mid for when we have multiple menus

// Get Menu
// GET /api/menu/
router.get("/", (req, res) => {
	Menu.find()
		.then(menu => res.send(menu))
		.catch(err => console.log("Get Menu DB Error: Find Menu Error", err))
})

// Add Category
// POST /api/menu/category/
router.post("/category/", (req, res) => {
	const menu = new Menu(req.body)
	menu._id = new mongoose.Types.ObjectId()
	menu.save()
		.then(res.send(menu))
		.catch(err => console.log("Add Category DB Error: Save Error", err))
})

// Add Item
// POST /api/menu/category/:cid/item/
router.post("/category/:cid/item/", (req, res) => {
	Menu.findById(req.params.cid)
		.then(category => {
			req.body._id = new mongoose.Types.ObjectId()
			category.items.push(req.body)
			category.save()
				.then(res.send(req.body))
				.catch(err => console.log("Add Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Add Item DB Error: Find Category Error", err))
})

// Edit Category
// PUT /api/menu/category/:cid
router.put("/category/:cid", (req, res) => {
	Menu.findByIdAndUpdate(req.params.cid, req.body)
		.then(res.send())
		.catch(err => console.log("Edit Category DB Error: Find/Update Category Error", err))
})

// Edit Item
// PUT /api/menu/category/:cid/item/:iid
router.put("/category/:cid/item/:iid", (req, res) => {
	Menu.findById(req.params.cid)
		.then(category => {
			category.items.id(req.params.iid).name = req.body.name
			category.items.id(req.params.iid).description = req.body.description
			category.items.id(req.params.iid).price = req.body.price
			category.save()
				.then(res.send())
				.catch(err => console.log("Update Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Update Item Category DB Error: Find Item Error", err))
})

// Delete Category
// DELETE /api/menu/category/:cid
router.delete("/category/:cid", (req, res) => {
	Menu.findByIdAndRemove(req.params.cid)
		.then(res.send())
		.catch(err => console.log("Delete Category DB Error: Find/Remove Category Error", err))
})

// Delete Item
// DELETE /api/menu/category/:cid/item/:iid
router.delete("/category/:cid/item/:iid", (req, res) => {
	Menu.findById(req.params.cid)
		.then(category => {
			category.items.id(req.params.iid).remove()
			category.save()
				.then(res.send())
				.catch(err => console.log("Delete Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Delete Item DB Error: Find Item Error", err))
})

module.exports = router
