import { IRent } from "../service-models/IRent";
import { IShowRent } from "../service-models/IShowRent";

export interface IRentRepository {
  findAll(data?:string) : Promise<IRent[]>;
  findById(id:string) : Promise<IRent | null>;
  create(data:IShowRent ) : IRent;
  save(data:IRent): Promise<IRent>;
  update(id:string, data:Partial<IRent>): Promise<void>;
  remove(data:IRent): Promise<IRent>;
}