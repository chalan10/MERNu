const express = require("express");
const router = express.Router();

// Category Model
const Category = require("../../models/Category.js");

// Get all categories
// GET /api/categories
router.get("/", (req, res) => {
	Category.find()
		.then(categories => res.json(categories));
});

// Create a category
// POST /api/category
router.post("/", (req, res) => {
	const newCategory = new Category({
		id: req.body.id,
		name: req.body.name
	});

	newCategory.save().then(category => res.json(category));
});

// Delete a category
// DELETE /api/category/:id
router.delete("/:id", (req, res) => {
	Category.findById(req.params.id)
		.then(category => category.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
})

module.exports = router;
