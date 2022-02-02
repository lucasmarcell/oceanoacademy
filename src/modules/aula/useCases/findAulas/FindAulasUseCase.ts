import { prisma } from '../../../../database/prismaClient'


export class FindAulasUseCase {
  async execute() {
    const aula = await prisma.aula.findMany({
      select: {
        id: true,
        lesson: true,
        /*         students: {
                  select: {
                    id: true,
                    username: true,
                  }
                }, */
        _count: {
          select: {
            students: true
          }
        },
        teacher: {
          select: {
            username: true,
          }
        }

      },
      orderBy: {
        created_at: 'desc'
      }

    })

    return aula;
  }
}