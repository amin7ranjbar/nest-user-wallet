import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RmqModule } from "nest-rabbitmq";
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './config';
import { WalletEntity } from './entity';
import { WalletService } from './service/wallet.service';
import { Redis } from 'ioredis';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RmqModule.register({
      uri: process.env.RABBITMQ_URL,
    }),
    TypeOrmModule.forRoot(dataSource.options),
    TypeOrmModule.forFeature([WalletEntity]),
  ],
  providers: [
    {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return new Redis({
          port: configService.get('REDIS_PORT'), // Redis port
          host: configService.get('REDIS_HOST'), // Redis host
          password: configService.get('REDIS_PASSWORD'),
        });;
      },
      provide: 'REDIS',
    },
    WalletService
  ]
})
export class AppModule {}
