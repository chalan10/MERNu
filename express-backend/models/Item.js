const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ItemSchema = new Schema({
	cid: mongoose.Schema.Types.ObjectId,
	name: String,
	description: String,
	price: Number,
	edit: Boolean
})

module.exports = mongoose.model("Item", ItemSchema)
