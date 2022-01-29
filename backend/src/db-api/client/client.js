const { Pool } = require('pg')
const md5 = require('md5');

class ApiClass {
	constructor() {
		this._init();
	}

	_init() {
		this.client = new Pool({
			host: 'localhost',
			user: 'develop',
			password: '1234',
			database: 'courses_shop',
			port: 5432,
			max: 20,
			min: 1,
			idleTimeoutMillis: 10000,
			connectionTimeoutMillis: 2000,
		});
	}

	async DBQuery(str) {
		const client = await this.client.connect();
		const result = await client.query(str);
		client.release();
		return result;
	}

	async getAllProductParams() {
		return await this.DBQuery('SELECT * FROM Product_Params');
	}

	async getAllUsers() {
		return await this.DBQuery('SELECT * FROM Users ORDER BY id');
	}

	async getAllCategories() {
		return await this.DBQuery('SELECT * FROM Categories ORDER BY title');
	}

	async getCategoryBiId(id) {
		return await this.DBQuery(`SELECT * FROM Categories WHERE id='${Number(id)}'`);
	}

	async createCategory(data) {
		return await this.DBQuery(`
			INSERT INTO Categories (title,description)
			VALUES ('${data.title}', '${data.description}')
		`);
	}

	async updateCategory(data) {
		return await this.DBQuery(`
			UPDATE Categories
			SET title='${data.title}',description='${data.description}' WHERE id='${data.id}'
		`);
	}

	async createProduct(data) {
		return await this.DBQuery(`
			INSERT INTO Products (title,price,category_id,url) 
			VALUES ('${data.title}', '${data.price}', '${data.categoryId}', '${data.url}')
			 RETURNING id
		`).then(async product => {
			const currentParams = data.params.filter(elem => elem.value.trim());
			return await currentParams.map(async elem => {
				return await this.DBQuery(`
					INSERT INTO Product_params_values (product_id,product_param_id,value)
					VALUES ('${product.rows[0].id}', '${elem.id}', '${elem.value.trim()}')
				`);
			});
		})
	};

	async updateProduct(data) {
		return await this.DBQuery(`
			DELETE
			FROM 
				product_params_values
			WHERE
				${data.id} = product_params_values.product_id
		`).then(async () => {
			return await this.DBQuery(`
				UPDATE Products
				SET
					title='${data.title}',
					price='${data.price}',
					category_id='${data.categoryId}',
					url='${data.url}'
				WHERE id='${data.id}'
			`).then(async () => {
				const currentParams = data.params.filter(elem => elem.value.trim());
				return await currentParams.map(async elem => {
					return await this.DBQuery(`
					INSERT INTO Product_params_values (product_id,product_param_id,value)
					VALUES ('${data.id}', '${elem.id}', '${elem.value}')
				`);
				});
			});
		})
	}

	async getAllProducts(categoryId) {
		return await this.DBQuery(`
			SELECT
				Products.id,
				Products.title,
				Products.price,
				Products.url,
				Categories.id as category_id,
				Categories.title as category_title
			FROM
				Products, Categories
			WHERE
				Products.category_id = Categories.id
  	` + (
			categoryId
				? `AND Categories.id = ${categoryId} ORDER BY id`
				: ` ORDER BY id`
		)
		).then(async products => {
			return await this.DBQuery(`
				SELECT
					Product_params.id as params_id,
					Product_params.name,
					Product_params.description,
					product_params_values.id,
					product_params_values.value,
					product_params_values.product_id,
					product_params_values.product_param_id
				FROM
					Product_params, product_params_values, products
				WHERE
					product_params_values.product_param_id = product_params.id
				AND
					products.id = product_params_values.product_id
			`)
				.then(params => {
					return products?.rows?.map(elem => ({
						id: elem.id,
						title: elem.title,
						price: elem.price,
						url: elem.url,
						categoryId: elem.category_id,
						categoryTitle: elem.category_title,
						params: params?.rows?.filter(el => el.product_id === elem.id).map(item => ({
							name: item.name,
							value: item.value,
						}))
					}))
				})
		})
	}

	async getProductById(id) {
		return await this.DBQuery(`
			SELECT
				Products.id,
				Products.title,
				Products.price,
				Products.url,
				Categories.id as category_id,
				Categories.title as category_title
			FROM
				Products, Categories
			WHERE
				Products.category_id = Categories.id
			AND
				Products.id = ${id}
		`).then(async product => {
			return await this.DBQuery(`
				SELECT
					Product_params.id as params_id,
					Product_params.name,
					Product_params.description,
					product_params_values.id,
					product_params_values.value,
					product_params_values.product_id,
					product_params_values.product_param_id
				FROM
					Product_params, product_params_values, products
				WHERE
					product_params_values.product_param_id = product_params.id
				AND
					${id} = product_params_values.product_id
				AND
					${id} = products.id
			`).then(async params => {
				return {
					...product.rows[0],
					params: params.rows,
				}
			});
		});
	}

	async deleteProduct(id) {
		return await this.DBQuery(`
			DELETE
			FROM
				Products
			WHERE
				Products.id = ${id}
		`)
	}

	async registration(data) {
		return await this.getAllUsers().then(async users => {
			if (users.rows.find(el => el.login === data.login)) {
				return false;
			}
			return this.DBQuery(`
				INSERT INTO Users (login,password,role,is_active,created_at)
				VALUES
					('${data.login}', '${md5(data.password)}', '${2}', '${true}', NOW())
			`)
		})
	}

	async login(data) {
		return await this.getAllUsers().then(async users => {
			let result = false;
			for (let item of users.rows) {
				if (item.login === data.login && item.is_active) {
					if (item.password === md5(data.password)) {
						result = {
							id: item.id,
							role: item.role,
							login: item.login,
						}
					}
				}
			}
			return result;
		})
	}

	async setTokenForUser(id, token) {
		await this.DBQuery(`
			UPDATE Users
			SET
				token='${token}'
			WHERE id='${id}'
		`)
	}

	async getUserById(id) {
		return await this.DBQuery(`
			SELECT * FROM Users WHERE id='${id}'
		`)
	}

	async createOrder(data) {
		return Promise.all(
			data.orderList.map(async elem => {
				return await this.DBQuery(`
					INSERT INTO Order_relations (product_id,count)
					VALUES ('${elem.id}', '${elem.value}') RETURNING id
				`)
			})
		).then(async res => {
			const list = res.map(el => {
				return el.rows[0].id;
			});
			return await this.DBQuery(`
				INSERT INTO Orders (relations,user_id,created_at)
				VALUES ('${list.join(',')}', '${data.userId}', NOW())
				RETURNING id
			`)
		})
	}

	async getAllOrders(id) {
		return await this.DBQuery(`
			SELECT * FROM Orders
		` + (id ? ` WHERE Orders.User_id = ${id}` : ''))
		.then(async result => {
			const array = []
			for (let item of result.rows) {
				const t = await this.DBQuery(`
					SELECT * FROM Order_relations
					WHERE
				` + item.relations.split(',').map((el, i) => {
					if (i === 0) {
						return ` Order_relations.id = ${Number(el)}`
					} else {
						return ` OR Order_relations.id = ${Number(el)}`
					}
				}).join('')).then(async data => {
					const res = {
						...item,
						products: data.rows
					};
					return await this.DBQuery(`
						SELECT * FROM Products
						WHERE
					` + res.products.map((elem, i) => {
						if (i === 0) {
							return ` Products.id = ${elem.product_id}`
						} else {
							return ` OR Products.id = ${elem.product_id}`
						}
					}).join('')).then(async products => {
						res.products = await res.products.map(elem => {
								const y = products.rows.find(el => el.id === elem.product_id);
								return {
									count: elem.count,
									...y
								}
							}
						);
						return res;
					})
				});
				array.push(t);
			}
			return array;
		}).then(async orders => {
			return await this.getAllUsers().then(users => {

				return orders.map(elem => ({
					...elem,
					userName: users.rows.find(el => el.id === elem.user_id).login,
				}))
			})
		});
	}

}

module.exports = {
	Api: new ApiClass(),
}