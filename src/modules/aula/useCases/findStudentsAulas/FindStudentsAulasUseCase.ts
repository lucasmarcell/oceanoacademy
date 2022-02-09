import { prisma } from '../../../../database/prismaClient'


export class FindStudentsAulasUseCase {
  async execute() {
    const aula = await prisma.aula.findMany({
      select: {
        id: true,
        students: {
          select: {
            id: true,
            username: true,
          }
        },
      },
      orderBy: {
        created_at: 'desc'
      }

    })

    return aula;
  }
}