import { Router } from "express";
import MoviesController from "../controllers/MoviesController";

const routes = Router();

const moviesController = new MoviesController();

routes.get('/',moviesController.list);
routes.post('/',moviesController.create);
routes.get('/:id',moviesController.show);
routes.put('/:id',moviesController.update);
routes.delete('/:id',moviesController.delete);

export default routes;