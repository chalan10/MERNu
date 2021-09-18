const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
	_id: String,
	//_id: mongoose.Schema.Types.ObjectId,
	//username: String,
	password: {
		type: String,
		default: ""
	},
	name: {
		type: String,
		default: ""
	}
	//active
	//history
})

module.exports = mongoose.model("Customer", CustomerSchema)
