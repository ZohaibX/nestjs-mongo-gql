import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonEntity } from './lesson.entity';
import { LessonInput } from './input/lesson.input';
import { AssignInput } from './input/assignInput.input';
import { StudentService } from './../student/student.service';

@Resolver(of => LessonType) // its a resolver with return type
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(returns => LessonType) // this decorator is must be imported from  @nestjs/graphql
  lesson(@Args('id') id: string): Promise<LessonEntity> {
    return this.lessonService.getLesson(id);
  }

  @Query(returns => [LessonType])
  lessons(): Promise<LessonEntity[]> {
    return this.lessonService.getAllLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('lessonInput') lessonInput: LessonInput,
  ): Promise<LessonEntity> {
    console.log(lessonInput);
    return this.lessonService.createLesson(lessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(
    @Args('assignInput') assignInput: AssignInput,
  ): Promise<LessonEntity> {
    const { lessonId, studentId } = assignInput;
    return this.lessonService.assignStudentsToLesson(lessonId, studentId);
  }

  @ResolveField()
  async students(@Parent() lesson: LessonEntity) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
