import { prisma } from '../../../../database/prismaClient'


export class FindAulasUseCase {
  async execute() {
    const aula = await prisma.aula.findMany({
      include: {
        students: {
          select: {
            id: true,
            username: true,
          }
        }

      },
    })

    return aula;
  }
}