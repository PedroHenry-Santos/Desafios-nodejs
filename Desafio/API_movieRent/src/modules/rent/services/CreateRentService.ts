import { IRentRepository } from "../domain/repositorie-models/IRentRepository";
import { IShowRent } from "../domain/service-models/IShowRent";

export default class CreateRentService{
  constructor(private repository:IRentRepository){}

  public async execute({ movie_id, rent_date, return_date, Is_available }:IShowRent){
    const  createRent = await this.repository.create({movie_id, rent_date, return_date, Is_available})
    const rent = await this.repository.save(createRent);

    return rent;
  }
}
