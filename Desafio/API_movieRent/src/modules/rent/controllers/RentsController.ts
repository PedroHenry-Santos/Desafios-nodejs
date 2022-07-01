import {Request,Response} from 'express'
import { ClientRepository } from '../../clients/typeorm/repository/ClientRepository';
import CreatRentService from '../services/CreateRentService';
import DeleteRentService from '../services/DeleteRent';
import ListRentService from '../services/ListRentService'
import ShowRentService from '../services/ShowRentService';
import UpdateRentService from '../services/UpdateRentService';
import { RentRepository } from '../typeorm/repository/RentRepository'

export default class RentsController {
  public async list(request:Request, response:Response){
    
    const rentRepository = new RentRepository()

    const listRentService = new ListRentService(rentRepository);

    const rents = await listRentService.execute();

    return response.status(200).json(rents)
      
  }

  public async create(request:Request, response:Response){
    const {rent_id,
      client_id,
      rent_date,
      return_date
      } = request.body

    const rentRepository = new RentRepository();
    const clientRepository = new ClientRepository();

    const creatRentService = new CreatRentService(rentRepository,clientRepository)
    
    const Rent = await creatRentService.execute({rent_id,
      client_id,
      rent_date,
      return_date})


    return response.status(200).json(Rent)
  }

  public async show(request:Request, response:Response){
    const {id} = request.params
    const rentRepository = new RentRepository()

    const showRentService = new ShowRentService(rentRepository);

    const Rent = await showRentService.execute(id);

    return response.status(200).json(Rent)
  }

  public async update(request:Request, response:Response){
    const {rent_id} = request.params
    const {
      client_id,
      rent_date,
      return_date} = request.body;
    const rentRepository = new RentRepository()
    const updateRentService = new UpdateRentService(rentRepository);
    const Rent = await updateRentService.execute(rent_id,{rent_id,
      client_id,
      rent_date,
      return_date})

    return response.status(200).json(Rent)
  }

  public async delete(request:Request, response:Response){
    const {id} = request.params;
    const rentRepository = new RentRepository()

    const deleteRentService = new DeleteRentService(rentRepository);
    
    await deleteRentService.execute(id)
    return response.status(200)
  }
}