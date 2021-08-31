const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
	/*
		{
			_id: 2198r7jfalk,
			name: "Appetizers",
			description: "Appetizers Description",
			edit: false,
			addItem: false,
			items: [
				{
					id: 1,
					category: 1,
					name: "French Fries",
					description: "Appetizer",
					price: 3.99,
					edit: false
				}
			]
		}
	*/	
	//_id: mongoose.Schema.Types.ObjectId,
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
	},
	items: [{
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
	}]
});

module.exports = mongoose.model("Menu", MenuSchema);
