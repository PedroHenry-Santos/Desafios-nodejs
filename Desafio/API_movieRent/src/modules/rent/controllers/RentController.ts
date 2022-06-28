import { request, Request, Response } from "express";
import CreateRentService from "../services/CreateRentService";
import DeleteRentService from "../services/DeleteRent";
import ListRentService from "../services/ListRentService";
import ShowRentService from "../services/ShowClientService";
import UpdateRentService from "../services/UpdateRentService";
import { RentRepositorie } from "../typeorm/repository/RentRepository";

export default class RentsController {
  public async list(req: Request, res: Response){
    const {id} = request.query;
    
  }
}