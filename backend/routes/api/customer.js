const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Customer = require("../../models/Customer.js")
const Menu = require("../../models/Menu.js")
const Restaurant = require("../../models/Restaurant.js")

// Get Account Info
// GET /api/customer/:cid
router.get("/:cid", (req, res) => {
	Customer.findById(req.params.cid)
		.then(customer => res.send(customer))
		.catch(err => console.log("Get Account DB Error: Find Customer Error", err))
})

// Edit Account Info
// PUT /api/customer/:cid
router.put("/:cid", (req, res) => {
	Customer.findById(req.params.cid)
		.then(customer => {
			customer.name = req.body.name
			customer.description = req.body.description
			customer.save()
				.then(res.send(customer))
				.catch(err => console.log("Edit Account DB Error: Save Error", err))
		})
		.catch(err => console.log("Edit Account DB Error: Find Customer Error", err))
})

module.exports = router
