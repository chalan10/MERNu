const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
	_id: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		default: ""
	}
	//active: []
	//history: []
})

module.exports = mongoose.model("Customer", CustomerSchema)
