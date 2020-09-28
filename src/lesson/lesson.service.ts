import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { LessonRepository } from './lesson.repository';
import { LessonInput } from './input/lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonRepository)
    private lessonRepository: LessonRepository,
  ) {}

  async getLesson(id: string): Promise<LessonEntity> {
    return this.lessonRepository.getLesson(id);
  }

  async getAllLessons(): Promise<LessonEntity[]> {
    return this.lessonRepository.getAllLessons();
  }

  async createLesson(lessonInput: LessonInput): Promise<LessonEntity> {
    return this.lessonRepository.createLasson(lessonInput);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentId: string[],
  ): Promise<LessonEntity> {
    return this.lessonRepository.assignStudentsToLesson(lessonId, studentId);
  }
  async getManyLessons(lessonId: string[]): Promise<LessonEntity[]> {
    console.log('lesson service file', lessonId);
    return this.lessonRepository.getManyLessons(lessonId);
  }
}
