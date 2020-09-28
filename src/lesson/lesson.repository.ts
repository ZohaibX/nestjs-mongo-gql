import { EntityRepository, Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { LessonInput } from './input/lesson.input';
import { v4 as uuid } from 'uuid';

@EntityRepository(LessonEntity)
export class LessonRepository extends Repository<LessonEntity> {
  async getAllLessons() {
    const data = await this.find();
    return data;
  }

  async getLesson(id: string) {
    return this.findOne({ id }); // we are finding id -- not mongo id, mongo id will be found as id, not {id }
  }

  async createLasson(lessonInput: LessonInput) {
    const { name, startDate, students } = lessonInput;
    const lesson = this.create({
      id: uuid(),
      name,
      startDate,
      endDate: new Date().toISOString(),
      students,
    });

    return this.save(lesson);
  }

  async assignStudentsToLesson(lessonId: string, studentId: string[]) {
    const lesson = await this.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentId];
    return this.save(lesson);
  }

  async getManyLessons(lessonId: string[]): Promise<LessonEntity[]> {
    console.log('lesson repo file', lessonId);
    return this.find({
      where: {
        id: {
          $in: lessonId,
        },
      },
    });
  }
}
