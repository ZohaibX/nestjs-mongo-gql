import { Module, forwardRef } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './../student/student.module';
import { LessonRepository } from './lesson.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([LessonRepository]),
    forwardRef(() => StudentModule),
  ],
  providers: [LessonResolver, LessonService],
  exports: [LessonService],
})
export class LessonModule {}
