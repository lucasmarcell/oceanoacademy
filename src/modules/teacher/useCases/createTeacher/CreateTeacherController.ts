import { Request, Response } from 'express'
import { CreateTeacherUseCase } from './CreateTeacherUseCase'

export class CreateTeacherController {

  async handle(request: Request, response: Response) {
    const { username, password } = request.body


    const createTeacherUseCase = new CreateTeacherUseCase()
    const result = await createTeacherUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}