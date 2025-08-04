import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { GeneralService } from './general.service';
import { CreateGeneralDto } from './dto/create-general.dto';

@Controller('general')
export class GeneralController {
    constructor(private readonly generalService: GeneralService) { }

    @Post('create')
    create(@Body() createGeneralDto: CreateGeneralDto) {
        return this.generalService.create(createGeneralDto);
    }

    @Get()
    findAll() {
        return this.generalService.findAllGeneral();
    }

    @Get('my-mission/:userId')
    findUserMissions(@Param('userId') userId: string) {
        return this.generalService.findMissionsByUserId(Number(userId));
    }

}
