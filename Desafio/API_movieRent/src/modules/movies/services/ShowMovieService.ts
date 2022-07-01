import { AppError } from "../../../shared/errors/AppError";
import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";

export default class ShowMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(id:string){
    const movie = await this.repository.findById(id)
    if(!movie){
      throw new AppError('filme não cadastrado',404);
    }
    return movie;
    
  }
}