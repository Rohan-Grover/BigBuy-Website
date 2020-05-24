const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	}
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer

