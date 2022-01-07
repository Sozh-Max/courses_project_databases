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
		}).catch(e => throw new Error(e));
		return await response.json();
	}

	getAllCategories = async () => {
		return await this.request({
			route: 'categories',
			data: {},
			method: 'GET',
		});
	}

	initApplication() {

	}

}

export const ApiClient = new ApiClientClass({
	port: 3333,
	url: 'http://localhost',
});
