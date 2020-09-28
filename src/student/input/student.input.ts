import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsUUID } from 'class-validator';
// GlobarPipe must be provide to main.ts file to use class-validator

@InputType()
export class StudentInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @IsUUID('4', { each: true })
  @Field(() => [ID], { defaultValue: [] })
  lessons: string[];
}
