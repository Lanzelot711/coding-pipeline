import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Post()
  async addTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}