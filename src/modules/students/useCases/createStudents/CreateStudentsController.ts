import { Request, Response } from 'express'
import { CreateStudentsUseCase } from './CreateStudentsUseCase'

export class CreateStudentsController {

  async handle(request: Request, response: Response) {
    const { username, password } = request.body

    const createStudentsUseCase = new CreateStudentsUseCase()
    const result = await createStudentsUseCase.execute({
      username,
      password,
    })

    return response.json(result)
  }
}

export { CreateStudentsUseCase }