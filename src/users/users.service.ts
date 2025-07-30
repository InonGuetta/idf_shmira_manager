import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { Users } from './users.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from './users.module';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private userModel: typeof Users,
        private readonly jwtservice: JwtService,
    ) { }

    async signUp(user_name: string, password: string): Promise<string> {
        const userExist = await Users.findOne({
            where: { user_name: user_name },
        });
        if (userExist) {
            throw new Error('User already exists');

        }
        const hash = await bcrypt.hash(password, 10);
        const user: Users = await this.userModel.create({ user_name, password: hash })
        const { user_id, role } = user
        const token: string = this.jwtservice.sign({ user_id, role })
        return token;
    }


}
