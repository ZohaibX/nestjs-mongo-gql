import { forwardRef, Module } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';
import { LessonModule } from './../lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([StudentRepository]),
    forwardRef(() => LessonModule),
  ],
  providers: [StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
