import { Router } from "express";
import Clients from "../../modules/clients/routes/clients.routes"
import Movies from "../../modules/movies"
import Rent from "../../modules/rent"

const routes = Router();

routes.use('/clients',Clients);
routes.use('/movies',Movies);
routes.use('/rent',Rent);

export default routes;