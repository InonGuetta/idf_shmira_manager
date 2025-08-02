import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table
export class General extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    general_id: number;

    @Column
    soldier: string;

    @Column({ type: DataType.DATE })
    startTime: Date;

    @Column({ type: DataType.DATE })
    endTime: Date;

    @Column
    content: string;

    @Column({ defaultValue: false })
    isDone: boolean;

}