import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";


export default class DeleteMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(id:string){
    const movie = await this.repository.findById(id);
    if (movie) await this.repository.remove(movie);
    
    

  }
}