import { IUserRepository } from "../domain/repositories-models/IUserRepository";

export default class ListUserService{
  constructor(private repository: IUserRepository){}

  public async execute(data?:string){
    const user = await this.repository.findAll(data);

    return user;
  }
}