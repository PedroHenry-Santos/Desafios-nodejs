import { IMovieRepository } from "../../domain/repositories-models/IMovieRepository";
import {  Repository } from "typeorm";
import AppDataSource from "../../../../shared/typeorm";
import { Movie } from "../entities/Movie";
import { IMovie } from "../../domain/service-models/IMovie";
import { IShowMovie } from "../../domain/service-models/IShowMovie";


export class MovieRepository implements IMovieRepository {
  private ormRepository: Repository<Movie>

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Movie)
  }

  findAll(category?: string): Promise<IMovie[]> {
    return this.ormRepository.find({where:{category}});
  }

  findById(id: string): Promise<IMovie | null> {
    return this.ormRepository.findOne({
      where: {id}
    });
  }

  create(data: IShowMovie): IMovie {
    return this.ormRepository.create(data)
  }
  save(data: IMovie): Promise<IMovie> {
    return this.ormRepository.save(data);
  }
  async update(id: string, data: Partial<IMovie>): Promise<void> {
    await this.ormRepository.update(id,data);
  }
  remove(data: IMovie): Promise<IMovie> {
    return this.ormRepository.remove(data);
  }

}