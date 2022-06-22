import { IClientRepository } from "../domain/repositories-models/IClientRepository";
import { IClient } from "../domain/service-models/IClient";

export default class UpdateClientService{
  constructor(private repository:IClientRepository){}

  public async execute(id:string,data:IClient)
  {
   await this.repository.findById(id);
   await this.repository.update(id,data);
   return await this.repository.findById(id); 
  }
}