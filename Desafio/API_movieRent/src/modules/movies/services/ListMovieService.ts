import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";



export default class ListMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute(data?:string){
    const movie = await this.repository.findAll(data);

    return movie;

    
  }
}