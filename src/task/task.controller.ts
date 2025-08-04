import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('my-missions/:userId')
  findUserMissions(@Param('userId') userId: string) {
    return this.taskService.findAllByUserId(Number(userId));
  }

  @Get()
  findAll() {
    return this.taskService.findAllTask();
  }

  @Get(':id')
  findOneTask(@Param('id') id: string) {
    return this.taskService.findOneTask(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: Partial<CreateTaskDto>) {
    return this.taskService.update(Number(id), updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(Number(id));
  }

}
