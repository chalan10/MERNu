const express = require("express");
const router = express.Router();

// Login/Landing Page
// GET /
router.get("/", (req, res) => {
	/*
	console.log("GET Home");
	res.send("GET Home");
	*/
	// TODO: moved data from frontend to backend, but we need to move it to a database
	const categories = [
		{
			id: 1,
			name: "Appetizers",
			description: "Appetizers Description",
			edit: false,
			addItem: false
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
			edit: false,
			addItem: false
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
			edit: false,
			addItem: false
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
			edit: false,
			addItem: false
		}
	];

	const items = [
		{
			id: 1,
			category: 1,
			name: "French Fries",
			description: "Appetizer",
			price: 3.99,
			edit: false
		},
		{
			id: 2,
			category: 2,
			name: "Burger",
			description: "Entree",
			price: 8.99,
			edit: false
		},
		{
			id: 3,
			category: 3,
			name: "Ice Cream",
			description: "Dessert",
			price: 2.99,
			edit: false
		},
		{
			id: 4,
			category: 4,
			name: "Soda",
			description: "Beverage",
			price: 1.99,
			edit: false
		}
	];

	res.send({"categories": categories, "items": items});
	//res.send({"msg": "hi from backend"});
	//res.send("hi from backend");
});

router.post("/", (req, res) => {
	console.log("POST Home");
	res.send("POST Home");
});

// Dashboard
// GET /menu
router.get("/menu", (req, res) => {
	console.log("GET Menu");
	res.send("GET Menu");
});

module.exports = router;
