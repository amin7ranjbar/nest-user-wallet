import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as entities from '../entity';
import * as migrations from '../migration';

config();

const configService = new ConfigService();

export const dataSource = new DataSource({
  type: 'postgres',
  host: configService.get('WALLET_DB_HOST'),
  port: configService.get('WALLET_DB_PORT'),
  username: configService.get('POSTGRES_USERNAME'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('WALLET_DB_NAME'),
  synchronize: false,
  logging: ['error'],
  entities,
  migrations,
});