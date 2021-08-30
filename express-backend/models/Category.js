const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	/*
		id: 1,
		name: "Appetizers",
		description: "Appetizers Description",
		edit: false,
		addItem: false
	*/
	id: {
		type: Number,
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
	edit: {
		type: Boolean,
		default: false
	},
	addItem: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model("Category", CategorySchema);
