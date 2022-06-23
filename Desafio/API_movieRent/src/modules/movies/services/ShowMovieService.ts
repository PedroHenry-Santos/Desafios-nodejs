import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";

export default class ShowMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(id:string){
    const movie = await this.repository.findById(id)
    return movie;
    
  }
}