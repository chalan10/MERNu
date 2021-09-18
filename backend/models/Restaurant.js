const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cid: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	price: Number,
	edit: Boolean
})

const CategorySchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	edit: Boolean,
	addItem: Boolean,
	items: [ItemSchema]
})

const RestaurantSchema = new Schema({
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
	},
	description: {
		type: String,
		default: ""
	},
	//edit: Boolean,
	menu: [CategorySchema]
	//active
	//history
})

module.exports = mongoose.model("Restaurant", RestaurantSchema)
