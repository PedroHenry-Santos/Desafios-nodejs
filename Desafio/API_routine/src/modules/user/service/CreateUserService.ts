import { IUserRepository } from "../domain/repositories-models/IUserRepository";
import { IShowUser } from "../domain/service-models/IShowUser";

export default class CreatUserService {
  constructor(private repository: IUserRepository){}

  public async execute({name, age, gender}:IShowUser){
    const createUser = await this.repository.create({name, age, gender})
    const user = await this.repository.save(createUser);

    return user;
  }
}