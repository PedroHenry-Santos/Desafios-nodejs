import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";
import { IShowMovie } from "../domain/service-models/IShowMovie";

export default class CreatMovieService{
  constructor(private repository:IMovieRepository){}

  public async execute({ name,id,release_date,value,duration,category}:IShowMovie){
    const createMovie = await this.repository.create({ name,id,release_date,value,duration,category})
    const movie = await this.repository.save(createMovie);
    return movie;

  }


}