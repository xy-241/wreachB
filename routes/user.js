const router = require("express").Router();
let User = require("../models/users/user"); // getting userSchema
let Technician = require("../models/users/technician"); // getting technicianSchema

router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	const phoneNumber = req.body.phoneNumber;
	const image = req.body.image;

	const newUser = new User({
		username,
		email,
		password,
		phoneNumber: phoneNumber,
		image,
	});

	newUser
		.save()
		.then(() => res.json("User added!"))
		.catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
