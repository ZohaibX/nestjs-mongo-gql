import { Field, ID, ObjectType } from '@nestjs/graphql';
import { StudentType } from './../student/student.type';

//! This file is specific for gql , although similar to entity file

@ObjectType('Lesson') // so now 'Lesson' will be used as reference . we will not use LessonType(which is a class) for class //! {For Reference only}
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string; // ISOString

  @Field()
  endDate: string; // ISOString

  @Field(type => [StudentType])
  students: string[];
}
