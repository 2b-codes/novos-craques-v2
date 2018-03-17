import Repository from "./Repository";
import axios from "axios";

export default class UsersRepository extends Repository {

	constructor(){
		super();
		this.create = this.create.bind(this);
		this.get = this.get.bind(this);
	}

	async create(body) {
		return await this.post("/users", body);
	}

	async get() {
		return await this.resolvePromise(axios.get(`${"http://52.14.160.237:3000/api"}${"/users"}`));
	}
} 