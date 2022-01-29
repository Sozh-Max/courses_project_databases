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
		await Api.getAllProducts().then(data => {
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

router.get('/category/:id', async (req, res) => {
	try {
		const data = await Api.getAllProducts(req.params.id);
		res.status(200).json(data);
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

router.get('/:id', async (req, res) => {
	try {
		const data = await Api.getProductById(req.params.id);
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

router.put('/', async (req, res) => {
	try {
		await Api.updateProduct(req.body).then(async () => {
			const data = await Api.getAllProducts();
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



