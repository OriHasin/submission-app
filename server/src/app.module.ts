import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { DatabaseModule } from './database.module';


@Module({
  imports: [
    UsersModule,
    DatabaseModule,
  ],
})

export class AppModule {}
