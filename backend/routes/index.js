const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Customer = require("../models/Customer.js")
const Restaurant = require("../models/Restaurant.js")

// TODO: should we change how we do form validation?
// atm we do it on the frontend, should we do it backend?

// Send Customer Login Information
// POST /login/customer
router.post("/login/customer", (req, res) => {
	console.log(req.body)
	Customer.findById(req.body.username)
		.then(data => {
			// new password check
			bcrypt.compare(req.body.password, data.password, (err, match) => {
				if (err) {
					throw err
				}
				if (match) {
					console.log("Successful Customer Login")
					// TODO: what do we want in our payload?
					const payload = {
						id: req.body.username,
						type: req.body.type
					}
					// TODO: should we move our secret to config file?
					jwt.sign(payload, "secret", (err, token) =>
						res.send({ success: true, token: token })
					)
				}
				else {
					console.log("Failed Customer Login")
					res.send({ success: false, msg: "Incorrect Password" })
				}
			})
		})
		.catch(err => {
			console.log("Customer Username Not Found", err)
			res.send({ success: false, msg: "Customer Username Not Found" })
		})
})

// Send Restaurant Login Information
// POST /login/restaurant
router.post("/login/restaurant", (req, res) => {
	console.log(req.body)
	Restaurant.findById(req.body.username)
		.then(data => {
			// new password check
			bcrypt.compare(req.body.password, data.password, (err, match) => {
				if (err) {
					throw err
				}
				if (match) {
					console.log("Successful Restaurant Login")
					// TODO: what do we want in our payload?
					const payload = {
						id: req.body.username,
						type: req.body.type
					}
					// TODO: should we move our secret to config file?
					jwt.sign(payload, "secret", (err, token) =>
						res.send({ success: true, token: token })
					)
				}
				else {
					console.log("Failed Restaurant Login")
					res.send({ success: false, msg: "Incorrect Password" })
				}
			})
		})
		.catch(err => {
			console.log("Restaurant Username Not Found", err)
			res.send({ success: false, msg: "Restaurant Username Not Found" })
		})
})

// Create Customer Account
// POST /create/customer
router.post("/create/customer", (req, res) => {
	Customer.findById(req.body.username).then(customer => {
		if (customer) {
			res.send({ success: false, msg: "Customer Username Already Exists" })
			console.log("Customer Username Already Exists")
		}
		else {
			const customer = new Customer(req.body)
			customer._id = req.body.username
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(customer.password, salt, (err, hash) => {
					if (err) {
						throw err
					}
					customer.password = hash
					customer.save()
						.then(res.send({ success: true }))
						.catch(err => console.log("Customer Account Creation DB Error: Save Error", err))
				})
			})
		}
	})
})

// Create Restaurant Account
// POST /create/restaurant
router.post("/create/restaurant", (req, res) => {
	Restaurant.findById(req.body.username).then(restaurant => {
		if (restaurant) {
			res.send({ success: false, msg: "Restaurant Username Already Exists" })
			console.log("Restaurant Username Already Exists")
		}
		else {
			const restaurant = new Restaurant(req.body)
			restaurant._id = req.body.username
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(restaurant.password, salt, (err, hash) => {
					if (err) {
						throw err
					}
					restaurant.password = hash
					restaurant.save()
						.then(res.send({ success: true }))
						.catch(err => console.log("Restaurant Account Creation DB Error: Save Error", err))
				})
			})
		}
	})
})

module.exports = router
