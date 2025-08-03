import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

   create(createTaskDto: CreateTaskDto) {
    const task = new Task()
    task.content = createTaskDto.content
    return task.save();
  }

   findAllTask() {
    return Task.findAll(); 
  }

   findOneTask(id: number) {
    return Task.findOne({ where: { id } });
  }

   update(id: number, updateTaskDto: UpdateTaskDto) {
    return Task.update(updateTaskDto, { where: { id } });
  }

   remove(id: number) {
    return Task.destroy({ where: { id } });
  }
}
