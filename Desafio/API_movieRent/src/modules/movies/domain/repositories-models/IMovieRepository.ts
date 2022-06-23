import { IMovie } from "../service-models/IMovie";
import { IShowMovie } from "../service-models/IShowMovie";


export interface IMovieRepository {
  findAll(data?:string) : Promise<IMovie[]>;
  findById(id:string) : Promise<IMovie | null>;
  create(data:IShowMovie ) : IMovie;
  save(data:IMovie): Promise<IMovie>;
  update(id:string, data:Partial<IMovie>): Promise<void>;
  remove(data:IMovie): Promise<IMovie>;
}