import { IClientRepository } from "../domain/repositories-models/IClientRepository";

export default class DeleteClientService{
  constructor(private repository:IClientRepository){}

  public async execute(id:string){
    const client = await this.repository.findById(id);
    
    if (client) await this.repository.remove(client);
  }
}