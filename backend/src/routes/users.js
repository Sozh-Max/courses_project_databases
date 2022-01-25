const { Router } = require('express');
const { Api } = require('../db-api/client/client');
const router = Router();
const jwt = require('jsonwebtoken');

const generateAccessToken = (id, login, role) => {
	const payload = {
		id,
		login,
		role,
	}
	return jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: '24h'})
}

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
			if (data) {
				const token = generateAccessToken(data.id, data.login, data.role);
				res.status(200).json({
					...data,
					token,
				});
				Api.setTokenForUser(data.id, token);
			} else {
				res.status(400).json({
					message: 'Login error'
				});
			}
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
router.post('/verification', async (req, res) => {
	try {
		await Api.getUserById(req.body.id).then(data => {
			if (data && data.rows.length) {
				const user = data.rows[0];
				if (user.token === req.body.token) {
					const decodedData = jwt.verify(req.body.token, process.env.TOKEN_SECRET);
					if (decodedData) {
						res.status(200).json(decodedData);
					}
				}
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
