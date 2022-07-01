import { IUserRepository } from "../domain/repositories-models/IUserRepository";

export default class DeleteUserService {
  constructor(private repository: IUserRepository){}

  public async execute(id:string){
    const user = await this.repository.findById(id);

    if (user) await this.repository.remove(user);
  }
}