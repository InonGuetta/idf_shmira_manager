import { Module } from '@nestjs/common';
import { GeneralController } from './general.controller';
import { GeneralService } from './general.service';
import { General } from './entities/general.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([General])],
  controllers: [GeneralController],
  providers: [GeneralService]
})
export class GeneralModule {}
