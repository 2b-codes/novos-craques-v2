import axios from "axios";

const ROOT_URL =  `${process.env.ROOT_URL || "localhost:3300"}/api`;

export default class BaseRepository {

	async get(endpoint) {
		return await this.resolvePromise(axios.get(`${ROOT_URL}${endpoint}`));
	}

	async post(endpoint, body) {
		console.log("BASE REPOSITORY - in post()", ROOT_URL);
		return await this.resolvePromise(axios.post(`${ROOT_URL}${endpoint}`, body));
	}

	async put(endpoint, body) {
		return await this.resolvePromise(axios.put(`${ROOT_URL}${endpoint}`, body));
	}
	async getLocal(endpoint) {
		return await this.resolvePromise(axios.get(endpoint));
	}
	async delete(endpoint) {
		return await this.resolvePromise(axios.delete(`${ROOT_URL}${endpoint}`));
	}

	async postLocal(endpoint, body) {
		return await this.resolvePromise(axios.post(endpoint, body));
	}

	logStarted(action) {
		this.pre = new Date();
		// console.info(action + " STARTED");
	}

	logFinished(action) {
		const pos = new Date();
		// console.info(action + " FINISHED (" + (pos - this.pre) + " ms)");
	}

	async resolvePromise(promise) {
		var data;
		var error;

		try {
			const result = await promise;
			if(result.data.success) data = result.data.data;
			else if(result.data) error = result.data.status;
			else error = { code: 502, msg: "unknown_error" };
		
		} catch(e) { 
			error = {
				code: 502,
				msg: e
			};
		}

		return { error, data };
	}
}