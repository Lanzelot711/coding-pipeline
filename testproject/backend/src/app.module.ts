
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://rootuser:rootpass@localhost:27017'),
    TasksModule,
  ],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
