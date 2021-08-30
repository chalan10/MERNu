const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	/*
		id: 1,
		category: 1,
		name: "French Fries",
		description: "Appetizer",
		price: 3.99,
		edit: false
	*/
	// TODO: require from user or should our db assign one
	id: {
		type: Number,
		required: true
	},
	// TODO: should this be required
	category: {
		type: String,
		required: true
	},
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
		default: 0.0
	},
	edit: {
		type: Boolean,
		default: false
	}
});

//module.exports = Item = mongoose.model("item", ItemSchema);
module.exports = mongoose.model("Item", ItemSchema);
