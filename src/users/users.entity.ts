import { Column, DataType, Model, Table } from "sequelize-typescript";
import { role } from "./enum/role.enum";

@Table
export class Users extends Model {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })

    user_id: number;

    @Column
    user_name: string;

    @Column
    password: string;

    @Column({
        // type:DataType.ENUM(...Object(role)),
        defaultValue: role.soldier
    })
    role: role

}




