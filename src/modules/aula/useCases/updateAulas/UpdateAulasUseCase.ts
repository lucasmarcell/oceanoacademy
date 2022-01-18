import { prisma } from '../../../../database/prismaClient'

export class UpdateAulasUseCase {
  async execute() {
    const aula = await prisma.aula.update({
      where: {
        id: "a2437e44-63b1-45b6-9fba-3712e74b3a2f"
      },
      data: {
        students: {
          connect: {
            id: "64857aa7-b75c-4db3-b25a-af517c176af1",
          }
        }
      }
    })

    return aula;
  }
}