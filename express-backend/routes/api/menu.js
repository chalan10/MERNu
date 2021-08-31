const express = require("express");
const router = express.Router();

const Menu = require("../../models/Menu.js");

// Get Menu
// GET /api/menu/
router.get("/", (req, res) => {
	Menu.find()
		.then(menu => res.send(menu))
		.catch(err => console.log("Get Menu DB Error", err))
});

// Add Category
// POST /api/menu/
router.post("/", (req, res) => {
	const menu = new Menu(req.body);
	menu.save()
		.then(res.send(menu))
		.catch(err => console.log("Add Category DB Error", err))
});

// Update Category
// PUT /api/menu/
router.put("/:cid", (req, res) => {
	Menu.findByIdAndUpdate(req.params.cid, req.body)
		.then(res.send(req.body))
		.catch(err => console.log("Update Category DB Error", err))
});

// Delete Category
// DELETE /api/menu/
router.delete("/:cid", (req, res) => {
	Menu.findByIdAndRemove(req.params.cid)
		.catch(err => console.log("Delete Category DB Error", err))
});

module.exports = router;
