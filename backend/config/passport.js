const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const mongoose = require("mongoose")

const Customer = require("../models/Customer.js")
const Restaurant = require("../models/Restaurant.js")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = "secret"

// TODO: we are currently trying to make the routes for customer and restaurant protected
// TODO: separate todo- add passport-local for login/register?, maybe store it in localStorage
// this is so that a login session persists
module.exports = passport => {
	passport.use(
		new JwtStrategy(opts, (jwt_payload, done) => {
			console.log("JWT Strategy!")
			console.log("jwt_payload", jwt_payload)
			if (jwt_payload.type === "customer") {
				Customer.findById(jwt_payload.id)
					.then(customer => {
						console.log(customer)
						if (customer) {
							return done(null, customer)
						}
						return done(null, false)
					})
					.catch(err => done(err, false))
			}
			else if (jwt_payload.type === "restaurant") {
				Restaurant.findById(jwt_payload.id)
					.then(restaurant => {
						console.log(restaurant)
						if (restaurant) {
							return done(null, restaurant)
						}
						return done(null, false)
					})
					.catch(err => done(err, false))
			}
		})
	)
}
