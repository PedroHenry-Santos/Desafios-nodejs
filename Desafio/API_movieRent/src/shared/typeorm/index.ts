import { Client } from "../../modules/clients/typeorm/entities/Client";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "apimovie",
  synchronize: true,
  logging: true,
  entities: [Client],
  subscribers: [],
  migrations: [],
})

export default AppDataSource;