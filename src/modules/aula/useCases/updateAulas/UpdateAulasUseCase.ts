import { prisma } from '../../../../database/prismaClient'

export class UpdateAulasUseCase {
  async execute() {
    const aula = await prisma.aula.update({
      where: {
        id: "fdc8cb89-b844-44ea-95e2-bb1ceccf37a6"
      },
      data: {
        students: {
          connect: {
            id: "5f318c7a-be72-412c-8b00-7f0c333dc347",
          }
        }
      }
    })

    return aula;
  }
}