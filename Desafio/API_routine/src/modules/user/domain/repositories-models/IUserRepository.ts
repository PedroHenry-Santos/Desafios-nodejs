import { IUser } from "../service-models/IUser";
import { IShowUser } from "../service-models/IShowUser";

export interface IUserRepository {
  findAll(data?:string) : Promise <IUser[]>;
  findById(id:string) : Promise <IUser | null>;
  create(data:IShowUser) : IUser;
  save(data:IUser) : Promise<IUser>;
  update(id:string, data:Partial<IUser>) : Promise<void>;
  remove(data:IUser) : Promise<IUser>;
}