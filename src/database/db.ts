import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
import { Roles1720014722571 } from './migrations/1720014722571-roles'
import { Users1719942765976 } from './migrations/1719942765976-users'
import { Services1720015489582 } from './migrations/1720015489582-services'
import { Appointments1720016459832 } from './migrations/1720016459832-appointments'



export const AppDataSource = new DataSource({
type: "mysql",
host: process.env.DB_HOST,
port: Number(process.env.DB_PORT),
username: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
entities: [],
migrations: [Roles1720014722571, Users1719942765976, Services1720015489582, Appointments1720016459832],
synchronize: false,
logging: false,
})
