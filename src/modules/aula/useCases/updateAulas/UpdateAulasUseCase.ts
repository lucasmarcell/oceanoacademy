import { prisma } from '../../../../database/prismaClient'



interface IUpdateAula {
  id_aula: string;
  id_students: string;
}

export class UpdateAulasUseCase {
  async execute({ id_aula, id_students }: IUpdateAula) {
    const aula = await prisma.aula.update({
      where: {
        id: id_aula
      },
      data: {
        students: {
          connect: {
            id: id_students,
          }
        }
      }
    })

    return aula;
  }
}