import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { General } from './entities/general.entity';
import { Users } from '../users/entities/users.entity';
import { Task } from '../task/entities/task.entity';
import { CreateGeneralDto } from './dto/create-general.dto';

@Injectable()
export class GeneralService {
    constructor(
        @InjectModel(General)
        private readonly generalModel: typeof General,
    ) { }

    create(createGeneralDto: CreateGeneralDto) {
        return this.generalModel.create({ ...createGeneralDto });
    }

    findAllGeneral() {
        return General.findAll();
    }

    async findMissionsByUserId(userId: number) {
    return this.generalModel.findAll({
        where: { userId },
        include: [
            {
                model: Task,
            },
            {
                model: Users,
            }
        ]
    });
}
}
