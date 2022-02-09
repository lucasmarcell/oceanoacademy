import { prisma } from '../../../../database/prismaClient'



interface IFindStudentsAula {
  id_aula: string;
}

export class FindStudentsAulasUseCase {
  async execute({ id_aula }: IFindStudentsAula) {
    const aula = await prisma.aula.findMany({
      where: {
        id: id_aula
      },
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