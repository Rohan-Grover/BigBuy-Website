const router = require('express').Router();
let Customer = require('../models/customer.model');

router.route('/').get((req,res) => {
	Customer.find()
	.then(customer=> res.json(customer))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const username = req.body.username;
	const password = req.body.password;

	const newCustomer = new Customer({
		username,
		password,
	});

	newCustomer.save()
	.then(() => res.json('Customer Added'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
