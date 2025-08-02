import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  async create(createTaskDto: CreateTaskDto) {
    const task = new Task()
    task.content = createTaskDto.content
    return await task.save();
  }

  async findAllTask() {
    return await Task.findAll();
  }

  async findOneTask(id: number) {
    return await Task.findOne({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await Task.update(updateTaskDto, { where: { id } });
  }

  async remove(id: number) {
    return await Task.destroy({ where: { id } });
  }
}
