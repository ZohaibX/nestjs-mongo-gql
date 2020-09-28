import { ObjectIdColumn, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lessons: string[]; //! so we have array of ids for lessons in database
}

// we need to provide this entity file to app module and module file of this folder
