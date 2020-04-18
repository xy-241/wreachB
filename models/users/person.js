const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PersonSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true, // Remove whitespaces
			minlength: 3,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: Number,
			required: true,
			unique: true,
		},
		image: {
			type: String,
			required: true,
			default: "default.jpg",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = PersonSchema;
