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

//const CategorySchema = new Schema({ look at todo below
const MenuSchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	edit: Boolean,
	addItem: Boolean,
	items: [ItemSchema]
})

/* TODO: this is for when we have multiple menus on the app rather than just one atm
const MenuSchema = new Schema({
	mid: mongoose.Schema.Types.ObjectId,
	name: String,
	categories: [CategorySchema]
})
*/

module.exports = mongoose.model("Menu", MenuSchema)
