import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RmqService } from 'nest-rabbitmq';
import { UserEntity } from 'src/entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly rmqService: RmqService
  ) { }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(createUserDto);
    await this.userRepository.save(newUser);
    await this.rmqService.publish({
      routingKey: 'wallet.create',
      payload: {
        id: createUserDto.id
      }
    });
    return newUser;
  }


  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    const wallet = await this.rmqService.request({
      routingKey: 'wallet.get',
      payload: { id }
    });
    return {
      ...user, amount: wallet['amount']
    };
  }

  async update(updateUserDto: UpdateUserDto) {
    const { amount, firstname, gender, id, lastname, username } = updateUserDto;
    await this.userRepository.update({
      firstname, gender, id, lastname, username
    }, { id });
    if (updateUserDto.amount) {
      await this.rmqService.publish({
        routingKey: 'wallet.set',
        payload: {
          id,
          amount,
        }
      });
    }
    return updateUserDto;
  }

}
