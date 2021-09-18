const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Customer = require("../models/Customer.js")
const Restaurant = require("../models/Restaurant.js")

// Login/Landing Page
// GET /
router.get("/", (req, res) => {
	console.log("GET Home")
	res.send("GET Home")
})

// Login
// POST /login
router.post("/login", (req, res) => {
	console.log(req.body)
	if (req.body.type === "customer") {
		Customer.findById(req.body.username)
			.then(data => {
				if (data.password === req.body.password) {
					res.send("success")
				}
				else {
					res.send("wrong password")
				}
			})
			.catch(err => {
				console.log("Customer Username Not Found", err)
				res.send("no customer")
			})
	}
	else if (req.body.type === "restaurant") {
		Restaurant.findById(req.body.username)
			.then(data => {
				if (data.password === req.body.password) {
					res.send("success")
				}
				else {
					res.send("wrong password")
				}
			})
			.catch(err => {
				console.log("Restaurant Username Not Found", err)
				res.send("no restaurant")
			})
	}
})

// Create Account
// POST /create
router.post("/create", (req, res) => {
	if (req.body.type === "customer") {
		const customer = new Customer(req.body)
		customer._id = req.body.username
		customer.save()
			.then(res.send(customer))
			.catch(err => console.log("Customer Account Creation DB Error: Save Error", err))
	}
	else if (req.body.type === "restaurant") {
		const restaurant = new Restaurant(req.body)
		restaurant._id = req.body.username
		restaurant.save()
			.then(res.send(restaurant))
			.catch(err => console.log("Restaurant Account Creation DB Error: Save Error", err))
	}
})

module.exports = router
