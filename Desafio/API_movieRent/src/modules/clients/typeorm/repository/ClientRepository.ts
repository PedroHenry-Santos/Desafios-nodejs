import { IClientRepository } from "../../domain/repositories-models/IClientRepository";
import {  Repository } from "typeorm";
import AppDataSource from "../../../../shared/typeorm";
import { Client } from "../entities/Client";
import { IClient } from "../../domain/service-models/IClient";
import { IShowClient } from "@modules/clients/domain/service-models/IShowClient";


export class ClientRepository implements IClientRepository {
  private ormRepository: Repository<Client>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Client)
  }

  findAll(cpf?: string): Promise<IClient[]> {
    return this.ormRepository.find({where:{cpf}});
  }

  findById(id: string): Promise<IClient | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }

  create(data: IShowClient): IClient {
    return this.ormRepository.create(data)
  }
  save(data: IClient): Promise<IClient> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<IClient>): Promise<void> {
    await this.ormRepository.update(id,data);
  }
  remove(data: IClient): Promise<IClient> {
    return this.ormRepository.remove(data);
  }

}