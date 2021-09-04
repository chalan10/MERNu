const express = require("express");
const router = express.Router();
const Menu = require("../../models/Menu.js");

// TODO: /api/menu/:mid for when we have multiple menus
// TODO: adding cat/item and then deleting right after before refreshing causes delete to not happen
// other odd behavior too
// TODO: after adding, if you edit it, it'll make another item rather than updating the new item
// then the menus between the two will alternate

// Get Menu
// GET /api/menu/
router.get("/", (req, res) => {
	Menu.find()
		.then(menu => res.send(menu))
		.catch(err => console.log("Get Menu DB Error", err))
});

// Add Category
// POST /api/menu/category/
router.post("/category/", (req, res) => {
	const menu = new Menu(req.body);
	menu.save()
		.then(res.send(menu))
		.catch(err => console.log("Add Category DB Error", err))
});

// Add Item
// POST /api/menu/category/:cid/item/
router.post("/category/:cid/item/", (req, res) => {
	Menu.findById(req.params.cid)
		.then(res => {
			res.items.push(req.body)
			res.save()
		})
		.then(res.send())
		.catch(err => console.log("Add Item DB Error", err))
});

// Update Category
// PUT /api/menu/category/:cid
router.put("/category/:cid", (req, res) => {
	Menu.findByIdAndUpdate(req.params.cid, req.body)
		.then(res.send())
		.catch(err => console.log("Update Category DB Error", err))
});

// Update Item
// PUT /api/menu/category/:cid/item/:iid
router.put("/category/:cid/item/:iid", (req, res) => {
	Menu.findById(req.params.cid)
		.then(res => {
			//console.log(res.items.id(req.params.iid))
			//console.log(req.body)
			res.items.id(req.params.iid).name = req.body.name
			res.items.id(req.params.iid).description = req.body.description
			res.items.id(req.params.iid).price = req.body.price
			res.save()
				.catch(err => console.log("Update Item DB Error", err))
		})
		.then(res.send())
		.catch(err => console.log("Update Item Category DB Error", err))
});

// Delete Category
// DELETE /api/menu/category/:cid
router.delete("/category/:cid", (req, res) => {
	Menu.findByIdAndRemove(req.params.cid)
		.catch(err => console.log("Delete Category DB Error", err))
});

// Delete Item
// DELETE /api/menu/category/:cid/item/:iid
router.delete("/category/:cid/item/:iid", (req, res) => {
	Menu.findById(req.params.cid)
		.then(res => {
			//console.log(res.items.id(req.params.iid))
			res.items.id(req.params.iid).remove()
			res.save()
		})
		.catch(err => console.log("Delete Item DB Error", err))
});

module.exports = router;
