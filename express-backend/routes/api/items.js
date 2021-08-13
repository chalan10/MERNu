const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item.js");

// Get all items
// GET /api/items
router.get("/", (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then(items => res.json(items));
});

// Create an item
// POST /api/items
router.post("/", (req, res) => {
	const newItem = new Item({
		name: req.body.name
	});

	newItem.save().then(item => res.json(item));
});

// Delete an item
// DELETE /api/item/:id
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
})

module.exports = router;
