import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ValueTransformer } from 'typeorm';
import { Exclude } from 'class-transformer';



const DateFormatTransformer: ValueTransformer = {
  to: (value: Date) => value,  // Stores regular date
  from: (value: Date) => value.toISOString().replace('T', ' ').split('.')[0]  // Returns formatted date
};



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

  @CreateDateColumn({transformer: DateFormatTransformer})
  createdAt: Date;

  @Exclude()
  @Column({ nullable: true })
  ipAddress: string;
  
  @Exclude()
  @Column({ nullable: true })
  userAgent: string;
}
