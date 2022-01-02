const { Pool } = require('pg')

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
		const client = await this.client.connect()
		const result = await client.query(str);
		client.release();
		return result;
	}

	async getAllUsers() {
		return await this.DBQuery('SELECT * FROM public."Users"');
	}

}

module.exports = {
	Api: Api = new ApiClass(),
}