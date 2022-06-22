import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

const clientsController = new ClientsController();

routes.get('/',clientsController.list);
routes.post('/',clientsController.create);
routes.get('/:id',clientsController.show);
routes.put('/:id',clientsController.update);
routes.delete('/:id',clientsController.delete);

export default routes;