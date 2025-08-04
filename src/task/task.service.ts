import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) { }

  create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create({ ...createTaskDto });
  }

  findAllTask() {
    return this.taskModel.findAll();
  }

  findOneTask(id: number) {
    return this.taskModel.findByPk(id);
  }

  findAllByUserId(userId: number) {
    return this.taskModel.findAll({ where: { userId } });
  }

  update(id: number, updateTaskDto: Partial<CreateTaskDto>) {
    return this.taskModel.update(updateTaskDto, { where: { id } });
  }

  remove(id: number) {
    return this.taskModel.destroy({ where: { id } });
  }
}
