const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	cid: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	price: Number,
})

const CategorySchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	items: [ItemSchema]
})

const RestaurantSchema = new Schema({
	_id: String,
	//_id: mongoose.Schema.Types.ObjectId,
	//username: String,
	password: String,
	name: String,
	description: String,
	menu: [CategorySchema]
	//active
	//history
})

module.exports = mongoose.model("Restaurant", RestaurantSchema)
