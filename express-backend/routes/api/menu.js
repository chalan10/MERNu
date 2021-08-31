const express = require("express");
const router = express.Router();

const Menu = require("../../models/Menu.js");

// Get Menu
// GET /api/menu/
router.get("/", (req, res) => {
	// TODO: moved data from frontend to backend, but we need to move it to a database
	/*
	const menu = [
		{
			id: 1,
			name: "Appetizers",
			description: "Appetizers Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 1,
					category: 1,
					name: "French Fries",
					description: "Appetizer",
					price: 3.99,
					edit: false
				},
				{

					id: 5,
					category: 1,
					name: "Egg Roll",
					description: "Appetizer",
					price: 1.99,
					edit: false
				}
			]
		},
		{
			id: 2,
			name: "Entrees",
			description: "Entrees Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 2,
					category: 2,
					name: "Burger",
					description: "Entree",
					price: 8.99,
					edit: false
				}
			]
		},
		{
			id: 3,
			name: "Dessert",
			description: "Dessert Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 3,
					category: 3,
					name: "Ice Cream",
					description: "Dessert",
					price: 2.99,
					edit: false
				}
			]
		},
		{
			id: 4,
			name: "Beverages",
			description: "Beverages Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 4,
					category: 4,
					name: "Soda",
					description: "Beverage",
					price: 1.99,
					edit: false
				}
			]
		}
	];

	res.send(menu);
	*/

	Menu.find()
		.then(items => res.json(items));
});

// Add Category
// POST /api/menu/
router.post("/", (req, res) => {
	const menu = new Menu({
		//_id: new mongoose.Types.ObjectId,
		name: req.body.name,
		description: req.body.description,
		edit: req.body.edit,
		addItem: req.body.addItem,
		items: req.body.items
	});
	console.log("Menu", menu);
	menu.save().then(result => {
		console.log("Result", result);
		console.log(req.body);
		res.json(result);
	});
});

// Update Menu
// PUT /api/menu/
router.put("/", (req, res) => {
	res.send("PUT /api/menu/");
});

// Delete Category
// DELETE /api/menu/
router.delete("/:cid", (req, res) => {
	Menu.findById(req.params.cid)
		.then(menu => menu.remove())
		.catch(err => console.log("Delete Category Error", err))
	//res.send("DELETE /api/menu/");
});
/*
// Delete an item
// DELETE /api/item/:id
router.delete("/:id", (req, res) => {
	Item.findById(req.params.id)
		.then(item => item.remove().then(() => res.json({ success: true })))
		.catch(err => res.status(404).json({ success: false }));
})
*/

module.exports = router;
