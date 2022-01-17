import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateStudent {
  username: string;
  password: string;
}


export class AutheticateStudentUseCase {

  async execute({ username, password }: IAuthenticateStudent) {
    const student = await prisma.students.findFirst({
      where: {
        username
      }
    })

    if (!student) {
      throw new Error('Username or password invalid!')
    }

    const passwordMatch = await compare(password, student.password)

    if (!passwordMatch) {
      throw new Error('Username or password invalid!')
    }

    const token = sign({ username }, "91cd2b3a7db8cd1a3594425eda856409", {
      subject: student.id,
      expiresIn: "1d"
    })

    return token
  }
}
