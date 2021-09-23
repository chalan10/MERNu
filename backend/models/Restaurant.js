const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cid: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ""
	},
	price: {
		type: Number,
		default: 0
	}
})

const CategorySchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		default: ""
	},
	items: [ItemSchema]
})

const RestaurantSchema = new Schema({
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
	},
	description: {
		type: String,
		default: ""
	},
	menu: [CategorySchema]
	//active: []
	//history: []
})

module.exports = mongoose.model("Restaurant", RestaurantSchema)
