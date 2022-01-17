import { Request, Response } from 'express'
import { AutheticateStudentUseCase } from './AuthenticateStudentUseCase'


export class AuthenticateStudentController {

  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateStudentUseCase = new AutheticateStudentUseCase()
    const result = await authenticateStudentUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}