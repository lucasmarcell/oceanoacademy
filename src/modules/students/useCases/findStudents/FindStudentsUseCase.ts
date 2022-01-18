import { prisma } from '../../../../database/prismaClient'


export class FindStudentsUseCase {
  async execute() {
    const students = await prisma.students.findMany({
      orderBy: {
        username: "asc"
      },
      select: {
        id: true,
        username: true,
      }
    })

    return students;
  }
}