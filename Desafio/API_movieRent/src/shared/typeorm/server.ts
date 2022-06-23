import express,{NextFunction,Request,Response} from 'express'
import "reflect-metadata"
import 'express-async-errors'
import AppDataSource from './index'

import Router from '../routes'

AppDataSource.initialize().then(() => {
  
  const app = express();
  app.use(express.json());
  app.use(Router);
  app.listen(3333,() => console.log('working!'));

}).catch((error) => console.log(error));