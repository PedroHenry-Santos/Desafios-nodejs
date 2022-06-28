import { IRentRepository } from "@modules/rent/domain/repositorie-models/IRentRepositories";
import { IRent } from "@modules/rent/domain/service-models/IRent";
import { IShowRent } from "@modules/rent/domain/service-models/IShowRent";
import AppDataSource from "@shared/typeorm";
import { Repository } from "typeorm";
import { Rent } from "../entities/Rent";

export class RentRepositorie implements IRentRepository {

  private ormRepository: Repository<Rent>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Rent)
  }

  findAll(category?: string): Promise<IRent[]> {
    return this.ormRepository.find({where:{category}});
  }

  findById(id: string): Promise<IRent | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }

  create(data: IShowRent): IRent {
    return this.ormRepository.create(data)
  }
  save(data: IRent): Promise<IRent> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<IRent>): Promise<void> {
    await this.ormRepository.update(id,data);
  }
  remove(data: IRent): Promise<IRent> {
    return this.ormRepository.remove(data);
  }


  
}