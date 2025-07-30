import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneralModule } from './general/general.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users/users.entity';

@Module({
  imports: [
    GeneralModule,
    UsersModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'ep-wandering-water-a2ng3bwj-pooler.eu-central-1.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner', 
      password: 'npg_4cDxs6eptjym',
      database: 'neondb',
      models: [Users],
      autoLoadModels: true,
      synchronize: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
