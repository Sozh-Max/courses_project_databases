class ApiClientClass {
	constructor({ port, url }) {
		this.address = `${url}:${port}/api/`;
	}

	request = async ({
		route,
		data,
		method,
	}) => {
		const body = {};
		if (method !== 'GET') {
			body.body = JSON.stringify(data);
		}

		const response = await fetch(this.address + route, {
			method: method,
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				"Access-Control-Allow-Origin" : "*",
				"Access-Control-Allow-Credentials" : true
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			...body,
		}).catch(e => console.log(e));
		return await response.json();
	}

	getAllProductParams = async () => {
		return await this.request({
			route: 'productParams',
			data: {},
			method: 'GET',
		});
	}

	getAllCategories = async () => {
		return await this.request({
			route: 'categories',
			data: {},
			method: 'GET',
		});
	}

	getCategoryById = async id => {
		return await this.request({
			route: `categories/${id}`,
			data: {},
			method: 'GET',
		});
	}

	createCategory = async (data) => {
		return await this.request({
			route: 'categories',
			data,
			method: 'POST',
		});
	}

	updateCategory = async (data) => {
		return await this.request({
			route: 'categories',
			data,
			method: 'PUT',
		});
	}

	getAllProducts = async (id) => {
		return await this.request({
			route: 'products' + (id ? `/category/${id}` : ''),
			data: {},
			method: 'GET',
		});
	}

	createProduct = async (data) => {
		return await this.request({
			route: 'products',
			data,
			method: 'POST',
		});
	}

	deleteProduct = async (id) => {
		return await this.request({
			route: 'products',
			data: {
				id,
			},
			method: 'DELETE',
		});
	}

	getProductById = async (id) => {
		return await this.request({
			route: `products/${id}`,
			data: {},
			method: 'GET',
		});
	}

	updateProduct = async (data) => {
		return await this.request({
			route: 'products',
			data,
			method: 'PUT',
		});
	}

	registration = async (data) => {
		return await this.request({
			route: 'users/register',
			data,
			method: 'POST',
		});
	}

	login = async (data) => {
		return await this.request({
			route: `users/login`,
			data,
			method: 'POST',
		});
	}

	verification = async (data) => {
		return await this.request({
			route: `users/verification`,
			data,
			method: 'POST',
		});
	}

	logout = async (data) => {
		return await this.request({
			route: `users/logout`,
			data,
			method: 'POST',
		});
	}

	createOrder = async (data) => {
		return await this.request({
			route: `orders`,
			data,
			method: 'POST',
		});
	}

	getAllOrders = async (id) => {
		return await this.request({
			route: 'orders' + (id ? `/${id}` : ''),
			data: {},
			method: 'GET',
		});
	}
}

export const ApiClient = new ApiClientClass({
	port: 3333,
	url: 'http://localhost',
});
