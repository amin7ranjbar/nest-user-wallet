import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('wallet')
  export class WalletEntity {
    @PrimaryGeneratedColumn()
    public id: number;
  
    @Column({ unique: true })
    public user_id: string;
  
    @Column({default: 0})
    public amount: number;
  }