import { DataSource, type DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export function ormconfig(): DataSourceOptions {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/@core/domain/**/*.schema.js'],
    migrations: ['dist/infra/database/typeorm/migrations/*{.ts,.js}'],
    synchronize: true,
    logging: false,
  };
}

const datasource = new DataSource(ormconfig());
export default datasource;
