import express,{NextFunction,Request,Response} from 'express'
import "reflect-metadata"
import 'express-async-errors'
import AppDataSource from './index'

import Router from '../routes'
import { errors } from 'celebrate'
import { AppError } from '../errors/AppError'

AppDataSource.initialize().then(() => {
  
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');

    next();
  })
  app.use(Router);
  app.use(errors());
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
      })
    }

    console.log(error);

    return res.status(500).json({
      message: 'Internal server error',
      statusCode: 500
    })
  })
  app.listen(3333,() => console.log('working!'));

}).catch((error) => console.log(error));