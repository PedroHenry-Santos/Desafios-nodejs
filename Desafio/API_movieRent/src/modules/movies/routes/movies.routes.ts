import { celebrate,Joi,Segments } from "celebrate";
import { Router } from "express";
import MoviesController from "../controllers/MoviesController";

const routes = Router();

const moviesController = new MoviesController();

routes.get('/',moviesController.list);
routes.post('/',celebrate({
  [Segments.BODY]:{
    name:Joi.string().required(),
    release_date:Joi.string().required(),
    duration:Joi.string().required(),
    category:Joi.string().required(),
    rent_id:Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),moviesController.create);
routes.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),moviesController.show);
routes.put('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),moviesController.update);
routes.delete('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid({
      version: 'uuidv4'
    }).required()
  }
}),moviesController.delete);

export default routes;