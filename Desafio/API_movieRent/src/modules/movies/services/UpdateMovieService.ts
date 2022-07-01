import { AppError } from "../../../shared/errors/AppError";
import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";
import { IMovie } from "../domain/service-models/IMovie";

export default class UpdateMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(id:string,data:IMovie)
  {
   const movie = this.repository.findById(id);
   if(!movie){
    throw new AppError('filme não cadastrado',404);
  }
   await this.repository.update(id,data);
   return await this.repository.findById(id); 
  }
}