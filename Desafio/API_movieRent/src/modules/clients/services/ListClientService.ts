import { IClientRepository } from "../domain/repositories-models/IClientRepository";
import { IClient } from "../domain/service-models/IClient";


export default class ListClientService{
  constructor(private repository:IClientRepository){}

  public async execute(data?:string){
    const client = await this.repository.findAll(data);

    return client;

    
  }
}