const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	rating: {
		type: Number
	}
});

const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor

