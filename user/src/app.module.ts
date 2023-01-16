import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user/user.module';
import { RmqModule } from "nest-rabbitmq";
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './config';
import { UserEntity } from './entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RmqModule.register({
      uri: process.env.RABBITMQ_URL,
    }),
    TypeOrmModule.forRoot(dataSource.options),
    TypeOrmModule.forFeature([UserEntity]),
    UserModule
  ]
})
export class AppModule {}
