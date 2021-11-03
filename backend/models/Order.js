const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
	_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true
	},
	cid: {
		type: String,
		required: true
	},
	rid: {
		type: String,
		required: true
	},
	items: [
		_id: mongoose.Schema.Types.ObjectId,
		name: String,
		price: Number,
		quantity: Number
	],
	total: {
		type: Number,
		default: 0.0
	}
})

module.exports = mongoose.model("Order", OrderSchema)
