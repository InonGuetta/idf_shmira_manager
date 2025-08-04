import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll(){
        return this.userService.findAllUsers();
    }

    @Post('signup')
    async signUp(@Body() insert_user: CreateUserDto) {
        const { user_name, password, role} = insert_user;
        try {
            return await this.userService.signUp(user_name, password, role)
        } catch (e) {
            console.error(e);

        }
    }

    @Post('register')
    register(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }


}
