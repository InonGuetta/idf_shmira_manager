import { Table, Column, DataType, Model, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "../../users/entities/users.entity";
import { Task } from "../../task/entities/task.entity";

@Table
export class General extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare id: number;

    @Column
    startTime: string;

    @Column
    endTime: string;

    @ForeignKey(() => Users)
    @Column
    userId: number;

    @BelongsTo(() => Users)
    user: Users;

    @ForeignKey(() => Task)
    @Column
    taskId: number;

    @BelongsTo(() => Task)
    task: Task;
}