const mongoose = require("mongoose")
const Schema = mongoose.Schema
//const Item = require("./Item.js")

const ItemSchema = new Schema({
	cid: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	price: Number,
	edit: Boolean
})

const CategorySchema = new Schema({
	name: String,
	description: String,
	edit: Boolean,
	addItem: Boolean,
	items: [ItemSchema]
})

module.exports = mongoose.model("Category", CategorySchema)
