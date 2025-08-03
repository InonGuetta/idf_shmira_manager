import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { General } from './entities/general.entity';
import { CreateGeneralDto } from './dto/create-general.dto';

@Injectable()
export class GeneralService {
    // constructor(
    //     @InjectModel(General)
    //     private readonly generalModel: typeof General,
    // ) { }

    create(createGeneralDto: CreateGeneralDto) {
        const general = new General();
        general.startTime = createGeneralDto.startTime
        general.endTime = createGeneralDto.endTime
        return general.save();
    }

}
