import { Router } from "express";
import Clients from "../../modules/clients/routes/clients.routes"
import Movies from "../../modules/movies/routes/movies.routes"
import Rent from "../../modules/rent/routes/rents.routes"

const routes = Router();

routes.use('/clients',Clients);
routes.use('/movies',Movies);
routes.use('/rent',Rent);

export default routes;