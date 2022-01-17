import { prisma } from "../../../../database/prismaClient";
import { hash } from 'bcrypt'

interface ICreateStudents {
  username: string;
  password: string;
}

export class CreateStudentsUseCase {

  async execute({ password, username }: ICreateStudents) {
    const studentsExists = await prisma.students.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    })

    if (studentsExists) {
      throw new Error("Aluno Já Existe")
    }

    const hashPassword = await hash(password, 10)


    const students = await prisma.students.create({
      data: {
        username,
        password: hashPassword,
      }
    })

    return students;
  }
}