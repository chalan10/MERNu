const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Menu = require("../../models/Menu.js")
const Restaurant = require("../../models/Restaurant.js")

// TODO: /api/menu/:mid for when we have multiple menus
// ^ no, keep it simple and only allow restaurants to have one menu
// TODO: replace Menu with Category for readability
// TODO: is it better for us to use :Xid for each restaurant, menu, category, item, etc
// or is better to just use req.body?
// for example, atm we use :ids in req.params for everything and client only sends
// relevant info for each request like when we want to edit category, we only send
// the new name and description and not id in req.body and send id in params
// _id of the object is still included in it even if it isn't in req.body and is in req.params,
// res.send() still sends all the proper info, we can double check by console.log
// is it better to just go like:
// /category- POST for add, PUT for edit, DELETE for delete
// and only use req.body to pull info? this way we would need to have client send all info
// like the id of what we're adding/editing/removing

// Get Account Info
// GET /api/restaurant/:rid
router.get("/:rid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => res.send(restaurant))
		.catch(err => console.log("Get Account DB Error: Find Restaurant Error", err))
})

// Edit Account Info
// PUT /api/restaurant/:rid
router.put("/:rid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			restaurant.name = req.body.name
			restaurant.description = req.body.description
			restaurant.save()
				.then(res.send(restaurant))
				.catch(err => console.log("Edit Account DB Error: Save Error", err))
		})
		.catch(err => console.log("Edit Account DB Error: Find Restaurant Error", err))
})

// Add Category
// POST /api/restaurant/:rid/category
router.post("/:rid/category", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			const newCategory = req.body
			newCategory._id = new mongoose.Types.ObjectId()
			restaurant.menu.push(newCategory)
			restaurant.save()
				.then(res.send(newCategory))
				.catch(err => console.log("Add Category DB Error: Save Error", err))
		})
		.catch(err => console.log("Add Category DB Error: Find Restaurant Error", err))
})

// Edit Category
// PUT /api/restaurant/:rid/category/:cid
router.put("/:rid/category/:cid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			const category = restaurant.menu.id(req.params.cid)
			category.name = req.body.name
			category.description = req.body.description
			restaurant.save()
				.then(res.send(category))
				.catch(err => console.log("Edit Category DB Error: Save Error", err))
		})
		.catch(err => console.log("Edit Category DB Error: Find Restaurant Error", err))
})

// Delete Category
// DELETE /api/restaurant/:rid/category/:cid
router.delete("/:rid/category/:cid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			restaurant.menu.id(req.params.cid).remove()
			restaurant.save()
				.catch(err => console.log("Delete Category DB Error: Save Error", err))
		})
		.catch(err => console.log("Delete Category DB Error: Find Restaurant Error", err))
})

// Add Item
// POST /api/restaurant/:rid/category/:cid/item
router.post("/:rid/category/:cid/item", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			const newItem = req.body
			newItem._id = new mongoose.Types.ObjectId()
			restaurant.menu.id(req.params.cid).items.push(newItem)
			restaurant.save()
				.then(res.send(newItem))
				.catch(err => console.log("Add Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Add Item DB Error: Find Restaurant Error", err))
})

// Edit Item
// PUT /api/restaurant/:rid/category/:cid/item/:iid
router.put("/:rid/category/:cid/item/:iid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			const item = restaurant.menu.id(req.params.cid).items.id(req.params.iid)
			item.name = req.body.name
			item.description = req.body.description
			item.price = req.body.price
			console.log(item)
			restaurant.save()
				.then(res.send(item))
				.catch(err => console.log("Edit Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Edit Item DB Error: Find Restaurant Error", err))
})

// Delete Item
// DELETE /api/restaurant/:rid/category/:cid/item/:iid
router.delete("/:rid/category/:cid/item/:iid", (req, res) => {
	Restaurant.findById(req.params.rid)
		.then(restaurant => {
			restaurant.menu.id(req.params.cid).items.id(req.params.iid).remove()
			restaurant.save()
				.catch(err => console.log("Delete Item DB Error: Save Error", err))
		})
		.catch(err => console.log("Delete Item DB Error: Find Restaurant Error", err))
})

module.exports = router
