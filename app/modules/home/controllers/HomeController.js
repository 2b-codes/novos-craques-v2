import UsersRepository from "../../../common/repositories/UsersRepository";

export default class HomeController {

	constructor(context){

		this.repo = new UsersRepository();


		this.getUsers = this.getUsers.bind(context);
	}

	async getUsers() {
		console.log(this);
		const users = await this.controller.repo.get();
		this.setState({users: users.data});
	}
}
