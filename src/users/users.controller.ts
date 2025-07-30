import { Body, Controller, Post } from '@nestjs/common';
import { signUpDto } from './DTO/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('signup')
    async signUp(@Body() insert_user: signUpDto ){
        const {user_name, password} = insert_user;
        try{
            return await this.userService.signUp(user_name, password)
        }catch(e){
            console.error(e);
            
        }
    }
}
