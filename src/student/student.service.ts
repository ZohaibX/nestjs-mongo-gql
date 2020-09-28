import { Injectable } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentInput } from './input/student.input';
import { StudentEntity } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async getStudents(): Promise<StudentEntity[]> {
    return this.studentRepository.getStudents();
  }

  async getStudentById(id: string): Promise<StudentEntity> {
    return this.studentRepository.getStudentById(id);
  }

  async createStudent(studentInput: StudentInput): Promise<StudentEntity> {
    return this.studentRepository.createStudent(studentInput);
  }

  async getManyStudents(studentId: string[]): Promise<StudentEntity[]> {
    return this.studentRepository.getManyStudents(studentId);
  }

  async assignLessonsToStudent(
    lessonId: string[],
    studentId: string,
  ): Promise<StudentEntity> {
    return this.studentRepository.assignLessonsToStudent(lessonId, studentId);
  }
}
