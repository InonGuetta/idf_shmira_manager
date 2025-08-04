import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CommanderGuard } from '../auth/commander.guard';


@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @UseGuards(AuthGuard, CommanderGuard)
  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('my-missions/:userId')
  @UseGuards(AuthGuard)
  findUserMissions(@Param('userId') userId: string, @Req() req) {
    const user = req.user;
    if (user.role === 'soldier' && user.user_id !== Number(userId)) {
      throw new ForbiddenException('Soldiers can only view their own missions');
    }
    return this.taskService.findAllByUserId(Number(userId));
  }

  @UseGuards(AuthGuard, CommanderGuard)
  @Get()
  findAll() {
    return this.taskService.findAllTask();
  }

  @UseGuards(AuthGuard, CommanderGuard)
  @Get(':id')
  findOneTask(@Param('id') id: string) {
    return this.taskService.findOneTask(+id);
  }

  @UseGuards(AuthGuard, CommanderGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: Partial<CreateTaskDto>) {
    return this.taskService.update(Number(id), updateTaskDto);
  }

  @UseGuards(AuthGuard, CommanderGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(Number(id));
  }

}
