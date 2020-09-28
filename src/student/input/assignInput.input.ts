import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID, MinLength } from 'class-validator';
// GlobalPipe must be provide to main.ts file to use class-validator

//! We are assigning multiple lessons to a single student
//! so we will input an id of lesson and an array of ids for students

@InputType()
export class AssignLessonsToStudentInput {
  @IsUUID()
  @Field(type => ID)
  studentId: string;

  @IsUUID('4', { each: true }) // UUID v4 and means array
  @Field(type => [ID])
  lessonId: string[];
}
