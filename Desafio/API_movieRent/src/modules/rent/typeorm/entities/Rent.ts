import { Column, CreateDateColumn, Entity, JoinColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { IRent } from '@modules/rent/domain/service/IRent';

@Entity('rents')
export class Rent implements IRent {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  id_client: number;

  @Column()
  id_movies: number;

  @Column()
  lending_date: Date;

  @Column()
  return_date: Date;

  @Column()
  is_rented: boolean;
}