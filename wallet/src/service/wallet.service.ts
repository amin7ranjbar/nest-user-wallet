import { HttpException, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Rpc, Subscribe } from "nest-rabbitmq";
import { WalletEntity } from "src/entity";
import { Repository } from "typeorm";
import Redis from 'ioredis';

@Injectable()
export class WalletService {
    constructor(
        @InjectRepository(WalletEntity)
        private walletRepository: Repository<WalletEntity>,
        @Inject("REDIS") private redisClient: Redis
    ) { }

    @Subscribe({ routingKey: "wallet.get" })
    async getWallet(body) {
        return await this.redisClient.get(body.id);
    }

    @Rpc({ routingKey: "wallet.create" })
    async createtWallet(body) {
        const newUser = await this.walletRepository.create({ user_id: body.id });
        await this.redisClient.set(body.id, JSON.stringify(newUser));
        await this.walletRepository.save(newUser);
    }

    @Subscribe({ routingKey: "wallet.set" })
    async setWalletAmount(body) {
        const userWallet =  await this.redisClient.get(body.id);
        if (userWallet["amount"] != body.amount) {
            const newUser = await this.walletRepository.findOneBy({ user_id: body.id });
            newUser.amount = body.amount;
            await this.walletRepository.save(newUser);
        }
    }
}