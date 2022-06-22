import { IClient } from "../service-models/IClient";
import { IShowClient } from "../service-models/IShowClient";


export interface IClientRepository {
  findAll(data?:string) : Promise<IClient[]>;
  findById(id:string) : Promise<IClient | null>;
  create(data:IShowClient ) : IClient;
  save(data:IClient): Promise<IClient>;
  update(id:string, data:Partial<IClient>): Promise<void>;
  remove(data:IClient): Promise<IClient>;
}