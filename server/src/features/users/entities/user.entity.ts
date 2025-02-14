import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // User Submitted Data
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  age: number;

  @Column()
  favoriteTennisPlayer: string;

  @Column()
  city: string;

  
  // Enriched Data from Request

  @CreateDateColumn()
  createdAt: Date;

  @Exclude()
  @Column({ nullable: true })
  ipAddress: string;
  
  @Exclude()
  @Column({ nullable: true })
  userAgent: string;
}
