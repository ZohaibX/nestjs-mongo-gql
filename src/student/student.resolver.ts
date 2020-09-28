import { StudentType } from './student.type';
import { StudentService } from './student.service';
import {
  Resolver,
  Args,
  Mutation,
  Query,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { StudentInput } from './input/student.input';
import { StudentEntity } from './student.entity';
import { AssignLessonsToStudentInput } from './input/assignInput.input';
import { LessonService } from './../lesson/lesson.service';
import { forwardRef, Inject } from '@nestjs/common';

@Resolver(of => StudentType) // its a resolver with return type
export class StudentResolver {
  constructor(
    private studentService: StudentService,
    private lessonService: LessonService,
  ) {}

  @Query(returns => [StudentType])
  getStudents(): Promise<StudentEntity[]> {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  getStudentById(@Args('id') id: string): Promise<StudentEntity> {
    return this.studentService.getStudentById(id);
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('studentInput') studentInput: StudentInput,
  ): Promise<StudentEntity> {
    return this.studentService.createStudent(studentInput);
  }

  @Mutation(returns => StudentType)
  assignLessonsToStudent(
    @Args('assignInput') assignInput: AssignLessonsToStudentInput,
  ): Promise<StudentEntity> {
    const { lessonId, studentId } = assignInput;
    return this.studentService.assignLessonsToStudent(lessonId, studentId);
  }

  @ResolveField()
  async lessons(@Parent() student: StudentEntity) {
    console.log(student);
    return this.lessonService.getManyLessons(student.lessons);
  }
}
