const { Router } = require('express');
const { Api } = require('../db-api/client/client');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const data = await Api.getAllProductParams();
		res.status(200).json(data.rows);
	} catch (e) {
		console.log(e)
		res.status(500).json({
			message: 'Server error'
		})
	}
});

module.exports = router;
