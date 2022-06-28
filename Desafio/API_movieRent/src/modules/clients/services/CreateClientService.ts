import { IClientRepository } from "../domain/repositories-models/IClientRepository";
import { IShowClient } from "../domain/service-models/IShowClient";

export default class CreatClientService{
  constructor(private repository:IClientRepository){}

  public async execute({name,id,cpf,tel,adress}:IShowClient){
    const createClient = await this.repository.create({name,id,cpf,tel,adress})
    const client = await this.repository.save(createClient);
    return client;

  }


}