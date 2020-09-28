import { Field, ID, ObjectType } from '@nestjs/graphql';
import { LessonType } from './../lesson/lesson.type';

//! This file is specific for gql , although similar to entity file
@ObjectType('Student') // so now 'Lesson' will be used as reference . we will not use LessonType(which is a class) for class //! {For Reference only}
export class StudentType {
  @Field(type => ID)
  id: string;

  @Field()
  firstName: string;

  @Field(type => [LessonType])
  lessons: string[];
}
