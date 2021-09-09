const express = require("express")
const router = express.Router()
const Item = require("../../models/Item.js")

// TODO: trying to figure out how to move some of the routing from menu to category and item

// Get all items
// GET /api/items
router.get("/", (req, res) => {
	Item.find()
		.then(items => res.json(items))
})

// Create an item
// POST /api/items
router.post("/", (req, res) => {
	const newItem = new Item({
		id: req.body.id,
		name: req.body.name
	})

	newItem.save().then(item => res.json(item))
})

// Delete an item
// DELETE /api/item/:id
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }))
})

module.exports = router
