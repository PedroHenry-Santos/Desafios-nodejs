import { Segments,Joi,celebrate } from 'celebrate';
import {Router} from 'express'
import RentsController from '../controllers/RentsController';

const routes = Router();

const rentController = new RentsController();


routes.get('/',rentController.list);
routes.post('/',celebrate({
  [Segments.BODY]: {
    client_id:Joi.string().uuid({version:'uuidv4'}).required(),
    rent_date:Joi.string().required(),
    return_date:Joi.string().required()

  }
}),rentController.create);
routes.get('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),rentController.show);
routes.put('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),rentController.update);
routes.delete('/:id',celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),rentController.delete);

export default routes;