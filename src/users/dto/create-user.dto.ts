import { IsString, IsIn, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly user_name: string

    @IsString()
    @MinLength(6)
    readonly password: string

    @IsIn(['soldier', 'commander'])
    role: string;
}