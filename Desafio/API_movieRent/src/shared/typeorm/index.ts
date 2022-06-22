import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "docker",
  database: "api",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
})

export default AppDataSource;