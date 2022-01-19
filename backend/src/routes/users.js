const { Router } = require('express');
const { Api } = require('../db-api/client');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const data = await Api.getAllUsers();
		res.status(200).json(data)
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
})

// 	const data = await Api.getAllUsers();
// 	console.log('data', data);

module.exports = router;
