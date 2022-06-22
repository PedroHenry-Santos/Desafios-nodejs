import express,{NextFunction,Request,Response} from 'express'
import "reflect-metadata"
import 'express-async-errors'

import Router from '../routes'


const app = express();
app.use(express.json());
app.use(Router);
app.listen(3333,() => console.log('working!'));