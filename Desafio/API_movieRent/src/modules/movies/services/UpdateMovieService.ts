import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";
import { IMovie } from "../domain/service-models/IMovie";

export default class UpdateMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(id:string,data:IMovie)
  {
   await this.repository.findById(id);
   await this.repository.update(id,data);
   return await this.repository.findById(id); 
  }
}