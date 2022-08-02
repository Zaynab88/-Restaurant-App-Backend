import { config } from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './entities/Product';
import { Category } from './entities/Category';
import { Order } from './entities/Order';
import { OrderLines } from './entities/OrderLines';



config();
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.PGHOST,
  port: +process.env.PGPORT!,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: false,
  entities: [Product,Order,Category,OrderLines],
  migrations: ['migration/*.ts'],
  subscribers: []
});





    export default AppDataSource