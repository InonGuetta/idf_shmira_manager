import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.entity';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    JwtModule.register({
      secret: 'scs',
      
    })
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
