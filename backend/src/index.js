const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

//const usersRoutes = require('./routes/users');
const categoriesRoutes = require('./routes/categories');


dotenv.config();
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(express.json());

//app.use('/api/users', usersRoutes);
app.use('/api/categories', categoriesRoutes);


app.listen(port, () => {
	console.log(`Example app listening at //localhost:${port}`);
});




// const test = async (req, res) => {
// 	const data = await Api.getAllUsers();
// 	console.log('data', data);
// }
//
//
// test();
