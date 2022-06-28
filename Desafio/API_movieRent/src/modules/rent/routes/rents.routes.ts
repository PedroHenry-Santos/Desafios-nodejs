import {Router} from 'express'


const routes = Router();


routes.get('/',rentControllers.list);
routes.get('/:id',rentControllers.show);
routes.put('/:id',rentControllers.update);
routes.post('/')

