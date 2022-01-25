const { Router } = require('express');
const { Api } = require('../db-api/client/client');
const router = Router();

router.post('/', async (req, res) => {
	try {
		await Api.createOrder(req.body).then(data => {
			res.status(200).json(data.rows);
		});
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.get('/', async (req, res) => {
	try {
		await Api.getAllOrders().then(data => {
			if (data) {
				res.status(200).json(data);
			}
		});

	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.get('/:id', async (req, res) => {
	try {
		await Api.getAllOrders(req.params.id).then(data => {
			if (data) {
				res.status(200).json(data);
			}
		});

	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

module.exports = router;