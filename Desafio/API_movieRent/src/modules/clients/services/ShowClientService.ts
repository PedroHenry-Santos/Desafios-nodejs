import { IClientRepository } from "../domain/repositories-models/IClientRepository";

export default class ShowClientService{
  constructor(private repository:IClientRepository){}

  public async execute(id:string){
    const client = await this.repository.findById(id)
    return client;
    
  }
}