const { Router } = require('express');
const { Api } = require('../db-api/client/client');
const router = Router();

router.post('/', async (req, res) => {
	try {
		await Api.createProduct(req.body);
		const data = await Api.getAllProducts();
		res.status(200).json(data);
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.get('/', async (req, res) => {
	try {
		const data = await Api.getAllProducts();
		console.log(data);
		res.status(200).json(data);
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.delete('/', async (req, res) => {
	try {
		console.log(req);
		await Api.deleteProduct(req.body.id).then(async () => {
			const data = await Api.getAllProducts();
			res.status(200).json(data);
		})
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

module.exports = router;



