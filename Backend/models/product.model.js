const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
	Name: {
		type: String,
		required: true,
		trim: true
	},
	Price: {
		type: Number,
		required: true
	},
	Quantity: {
		type: Number,
		required: true,
	},
	Status: {
		type: String,
		required: true,
	}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product 

