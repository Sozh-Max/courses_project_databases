const { Router } = require('express');
const { Api } = require('../db-api/client/client');
const {log} = require('nodemon/lib/utils');
const router = Router();

router.get('/', async (req, res) => {
	try {
		await Api.getAllUsers().then(data => {
			res.status(200).json(data);
		});
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.post('/login', async (req, res) => {
	try {
		await Api.login(req.body).then(data => {
			res.status(200).json(data);
		});
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.post('/register', async (req, res) => {
	try {
		await Api.registration(req.body).then(data => {
			res.status(200).json(data);
		});
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

module.exports = router;
