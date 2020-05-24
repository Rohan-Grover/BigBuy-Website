const router = require('express').Router();
let Vendor = require('../models/vendor.model');

router.route('/').get((req,res) => {
	Vendor.find()
	.then(vendor=> res.json(vendor))
	.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
	const username = req.body.username;
	const password = req.body.password;
	const rating = req.body.rating;

	const newVendor = new Vendor({
		username,
		password,
		rating,
	});

	newVendor.save()
	.then(() => res.json('Vendor Added'))
	.catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
