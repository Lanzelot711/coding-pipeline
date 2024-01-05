import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://rootuser:rootpass@localhost:27017/todo-app'), TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}