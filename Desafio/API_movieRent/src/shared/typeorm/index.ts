import { Client } from "../../modules/clients/typeorm/entities/Client";
import { DataSource } from "typeorm";
import { Movie } from "../../modules/movies/typeorm/entities/Movie";
import { Rent } from "../../modules/rent/typeorm/entities/Rent";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "apiMovie",
  synchronize: true,
  logging: true,
  entities: [Client,Movie,Rent],
  subscribers: [],
  migrations: [],
})

export default AppDataSource;