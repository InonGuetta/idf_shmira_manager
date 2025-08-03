import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { Users } from './entities/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users)
        private userModel: typeof Users,
        private readonly jwtservice: JwtService,
    ) { }

    async signUp(user_name: string, password: string, role: string): Promise<string> {
        const hash = await bcrypt.hash(password, 10);
        const user: Users = await this.userModel.create({ user_name, password: hash, role })
        const { user_id } = user
        const token: string = this.jwtservice.sign({ user_id, role })
        return token;
    }

    
}
