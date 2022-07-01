import { AppError } from "../../../shared/errors/AppError";
import { IClientRepository } from "../../clients/domain/repositories-models/IClientRepository";
import { IRentRepository } from "../domain/repositorie-models/IRentRepository";
import { IShowRent } from "../domain/service-models/IShowRent";

export default class CreateRentService{
  constructor(private repository:IRentRepository,
    private readonly clientRepository: IClientRepository ){}

  public async execute({ rent_id,
      client_id,
      rent_date,
      return_date }:IShowRent){
      const client = this.clientRepository.findById(client_id);
      if(!client){
        throw new AppError('Cliente não existe',404);
      }
    const  createRent = await this.repository.create({rent_id,
      client_id,
      rent_date,
      return_date})
    const rent = await this.repository.save(createRent);

    return rent;
  }
}
