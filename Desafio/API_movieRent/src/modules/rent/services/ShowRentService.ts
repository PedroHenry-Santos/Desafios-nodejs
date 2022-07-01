import { IRentRepository } from "../domain/repositorie-models/IRentRepository";

export default class ShowRentService{
  constructor(private repository:IRentRepository){}

  public async execute(id:string){
    const rent = await this.repository.findById(id)

    return rent;
  }
}