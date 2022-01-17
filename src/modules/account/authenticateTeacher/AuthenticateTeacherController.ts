import { Request, Response } from 'express'
import { AutheticateTeacherUseCase } from './AuthenticateTeacherUseCase'


export class AuthenticateTeacherController {

  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateTeacherUseCase = new AutheticateTeacherUseCase()
    const result = await authenticateTeacherUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}