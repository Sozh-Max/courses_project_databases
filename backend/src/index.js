const express = require('express');
const dotenv = require('dotenv');

const { Api } = require('./db-api/client/client');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(port, () => {
	console.log(`Example app listening at //localhost:${port}`);
});

const test = async (req, res) => {
	const data = await Api.getAllUsers();
	console.log('data', data);
}


test();
