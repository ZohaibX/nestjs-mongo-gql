//! This file is specific for TypeOrm and mongo , although similar to type file

import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity() // It is a main entity
export class LessonEntity /*we should call it Lesson but for starting , i used this */ {
  // auto generated id by mongodb
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn() // we will use this ID, not mongo db's
  id: string;

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  students: string[]; //! so we have array of ids for students in database
}
