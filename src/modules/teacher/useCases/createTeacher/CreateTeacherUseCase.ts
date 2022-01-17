import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateTeacher {
  username: string;
  password: string;
}

export class CreateTeacherUseCase {

  async execute({ username, password }: ICreateTeacher) {
    const teacherExist = await prisma.teacher.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (teacherExist) {
      throw new Error("Professor já Existe")
    }

    const hashPassword = await hash(password, 10)


    const teacher = await prisma.teacher.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return teacher;
  }
}