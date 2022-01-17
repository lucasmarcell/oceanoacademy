import { prisma } from '../../../../database/prismaClient'

interface ICreateAula {
  presence: string;
  lesson: string;
  id_students: string;
  id_teacher: string;
}

export class CreateAulaUseCase {
  async execute({ presence, id_teacher, id_students, lesson }: ICreateAula) {
    const aula = await prisma.aula.create({
      data: {
        presence,
        lesson,
        id_teacher,
        id_students,
      }
    })

    return aula;
  }
}