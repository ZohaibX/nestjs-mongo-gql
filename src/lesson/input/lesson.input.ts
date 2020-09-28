import { InputType, Field, ID } from '@nestjs/graphql';
import { IsDateString, IsUUID, MinLength } from 'class-validator';
// GlobarPipe must be provide to main.ts file to use class-validator

//! This is a file for Creating lesson single
//! Thats what we will provide when creating a lesson

@InputType()
export class LessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsUUID('4', { each: true }) // v4 of UUID and as an array
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
