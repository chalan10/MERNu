const express = require("express");
const router = express.Router();
const Category = require("../../models/Category.js");
const Menu = require("./menu.js");

// TODO: trying to figure out how to move some of the routing from menu to category and item

// Get all categories
// GET /api/menu/categories/
router.get("/", (req, res) => {
	res.send("category")
	/*
	Category.find()
		.then(categories => res.json(categories));
	*/
});

module.exports = router;
