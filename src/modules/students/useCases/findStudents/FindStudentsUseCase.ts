import { prisma } from '../../../../database/prismaClient'


export class FindStudentsUseCase {
  async execute() {
    const students = await prisma.students.findMany({})

    return students;
  }
}