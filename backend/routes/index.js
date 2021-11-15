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
		.then(customer => {
			bcrypt.compare(req.body.password, customer.password, (err, match) => {
				if (err) {
					console.log("customer login compare err", err)
				}
				if (match) {
					console.log("Successful Customer Login")
					const payload = {
						id: req.body.username,
						type: req.body.type
					}
					console.log("payload", payload)
					// TODO: should we return username in response too?
					// what to do with jwt token when a user has a valid one
					// TODO: for now, sending user both username and acc type
					// figure out a better way if there is one
					jwt.sign(payload, "secret", (err, token) =>
						res.send({
							success: true,
							username: req.body.username,
							name: customer.name,
							type: req.body.type,
							token: "Bearer " + token
						})
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
		.then(restaurant => {
			bcrypt.compare(req.body.password, restaurant.password, (err, match) => {
				if (err) {
					throw err
				}
				if (match) {
					console.log("Successful Restaurant Login")
					const payload = {
						id: req.body.username,
						type: req.body.type
					}
					jwt.sign(payload, "secret", (err, token) =>
						res.send({
							success: true,
							username: req.body.username,
							name: restaurant.name,
							type: req.body.type,
							token: "Bearer " + token
						})
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
	Customer.findById(req.body.username)
		.then(customer => {
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
	Restaurant.findById(req.body.username)
		.then(restaurant => {
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
