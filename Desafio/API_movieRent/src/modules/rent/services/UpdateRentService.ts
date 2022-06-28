import { IRentRepository } from "../domain/repositorie-models/IRentRepository";
import { IRent } from "../domain/service-models/IRent";

export default class UpdateRentService{
  constructor(private repository:IRentRepository){}

  public async execute(id:string, data:IRent){
    await this.repository.findById(id);
    await this.repository.update(id, data);
    
    return await this.repository.findById(id)
  }

}