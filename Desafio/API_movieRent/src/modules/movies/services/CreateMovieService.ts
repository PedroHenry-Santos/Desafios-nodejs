import { AppError } from "../../../shared/errors/AppError";
import { IRentRepository } from "../../rent/domain/repositorie-models/IRentRepository";
import { IMovieRepository } from "../domain/repositories-models/IMovieRepository";
import { IShowMovie } from "../domain/service-models/IShowMovie";

export default class CreatMovieService{
  constructor(private repository:IMovieRepository, private rentRepository: IRentRepository){}
    
  public async execute({ name,id,release_date,rent_id,duration,category}:IShowMovie){
    const rent = await this.rentRepository.findById(rent_id)
    if (!rent){
      throw new AppError('Não existe o aluguel',404)
    }
    const createMovie = await this.repository.create({ name,id,release_date,rent_id,duration,category})
    const movie = await this.repository.save(createMovie);
    return movie;

  }


}