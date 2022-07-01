import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import {celebrate,Joi,Segments} from 'celebrate';

const routes = Router();

const clientsController = new ClientsController();

routes.get('/',clientsController.list);
routes.post('/',celebrate({
  [Segments.BODY]: {
    name:Joi.string().required(),
    id:Joi.string().uuid({
      version: 'uuidv4'
    }).required(),
    cpf:Joi.string().required(),
    tel:Joi.string().required(),
    adress:Joi.string().required()
  }
}),clientsController.create);
routes.get('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),clientsController.show);
routes.put('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),clientsController.update);
routes.delete('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),clientsController.delete);

export default routes;