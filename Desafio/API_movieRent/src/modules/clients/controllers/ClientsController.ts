import {Request,Response} from 'express'
import CreatClientService from '../services/CreateClientService';
import DeleteClientService from '../services/DeleteClientService';
import ListClientService from '../services/ListClientService'
import ShowClientService from '../services/ShowClientService';
import UpdateClientService from '../services/UpdateClientService';
import { ClientRepository } from '../typeorm/repository/ClientRepository'

export default class clientsController {
  public async list(request:Request, response:Response){
    
    const clientRepository = new ClientRepository()

    const listClientService = new ListClientService(clientRepository);

    const clients = await listClientService.execute();

    return response.status(200).json(clients)
      
  }

  public async create(request:Request, response:Response){
    const {name,id,cpf,tel,adress} = request.body;

    const clientRepository = new ClientRepository()

    const creatClientService = new CreatClientService(clientRepository)
    
    const client = await creatClientService.execute({name,id,cpf,tel,adress})


    return response.status(200).json(client)
  }

  public async show(request:Request, response:Response){
    const {id} = request.params
    const clientRepository = new ClientRepository()

    const showClientService = new ShowClientService(clientRepository);

    const client = await showClientService.execute(id);

    return response.status(200).json(client)
  }

  public async update(request:Request, response:Response){
    const {id} = request.params
    const {name,cpf,tel,adress} = request.body;
    const clientRepository = new ClientRepository()
    const updateClientService = new UpdateClientService(clientRepository);
    const client = await updateClientService.execute(id,{name,id,cpf,tel,adress})

    return response.status(200).json(client)
  }

  public async delete(request:Request, response:Response){
    const {id} = request.params;
    const clientRepository = new ClientRepository()

    const deleteClientService = new DeleteClientService(clientRepository);
    
    await deleteClientService.execute(id)
    return response.status(200)
  }
}