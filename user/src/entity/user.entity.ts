import { Gender } from '../enum';
import {
    Column,
    Entity,
  } from 'typeorm';
  
  @Entity('user')
  export class UserEntity {
    @Column({ unique: true , primary: true})
    public id: string;
  
    @Column({ unique: true })
    public username: string;
  
    @Column({nullable: true})
    public firstname: string;

    @Column({nullable: true})
    public lastname: string;

    @Column({ type: 'enum', enum: Gender })
    public gender: Gender;

  }