import { StudentEntity } from './student.entity';
import { EntityRepository, Repository } from 'typeorm';
import { StudentInput } from './input/student.input';
import { v4 as uuid } from 'uuid';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  async getStudents(): Promise<StudentEntity[]> {
    return this.find();
  }

  async getStudentById(id: string): Promise<StudentEntity> {
    const data = await this.findOne({ id });
    console.log(data);
    return data;
  }

  async createStudent(studentInput: StudentInput): Promise<StudentEntity> {
    const data = this.create({
      id: uuid(),
      firstName: studentInput.firstName,
      lessons: studentInput.lessons,
    });

    return this.save(data);
  }

  async getManyStudents(studentId: string[]): Promise<StudentEntity[]> {
    return this.find({
      where: {
        id: {
          $in: studentId,
        },
      },
    });
  }

  async assignLessonsToStudent(lessonId: string[], studentId: string) {
    const student = await this.findOne({ id: studentId });
    student.lessons = [...student.lessons, ...lessonId];
    return this.save(student);
  }
}
