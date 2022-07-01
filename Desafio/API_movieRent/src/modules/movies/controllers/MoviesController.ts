import {Request,Response} from 'express'
import { RentRepository } from '../../rent/typeorm/repository/RentRepository';
import CreatMovieService from '../services/CreateMovieService';
import DeleteMovieService from '../services/DeleteMovieService';
import ListMovieService from '../services/ListMovieService'
import ShowMovieService from '../services/ShowMovieService';
import UpdateMovieService from '../services/UpdateMovieService'
import { MovieRepository } from '../typeorm/repository/MovieRepository'

export default class MoviesController {
  public async list(request:Request, response:Response){
    const {category} = request.query;

    const movieRepository = new MovieRepository()

    const listMovieService = new ListMovieService(movieRepository);

    const movies = await listMovieService.execute(category as string);

    return response.status(200).json(movies)
      
  }

  public async create(request:Request, response:Response){
    const { name,id,release_date,duration,category,rent_id} = request.body;

    const movieRepository = new MovieRepository();

    const rentRepository = new RentRepository();

    const creatMovieService = new CreatMovieService(movieRepository,rentRepository);
    
    const movie = await creatMovieService.execute({ name,id,release_date,duration,category,rent_id});


    return response.status(200).json(movie)
  }

  public async show(request:Request, response:Response){
    const {id} = request.params
    const movieRepository = new MovieRepository()

    const showMovieService = new ShowMovieService(movieRepository);

    const movie = await showMovieService.execute(id);

    return response.status(200).json(movie)
  }

  public async update(request:Request, response:Response){
    const {id} = request.params
    const { name,release_date,duration,category,rent_id} = request.body;
    const movieRepository = new MovieRepository()
    const updateMovieService = new UpdateMovieService(movieRepository);
    const movie = await updateMovieService.execute(id,{ name,id,release_date,duration,category,rent_id})

    return response.status(200).json(movie)
  }

  public async delete(request:Request, response:Response){
    const {id} = request.params;
    const movieRepository = new MovieRepository()

    const deleteMovieService = new DeleteMovieService(movieRepository);
    
    await deleteMovieService.execute(id)
    return response.status(200)
  }
}