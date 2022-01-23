const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const usersRoutes = require('./routes/users');
const categoriesRoutes = require('./routes/categories');
const productParamsRouter = require('./routes/productParams');
const productsRouter = require('./routes/products');

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/productParams', productParamsRouter);
app.use('/api/categories', categoriesRoutes);
app.use('/api/categories/:id', categoriesRoutes);
app.use('/api/products', productsRouter);
app.use('/api/products/:id', productsRouter);


app.listen(port, () => {
	console.log(`Example app listening at //localhost:${port}`);
});


