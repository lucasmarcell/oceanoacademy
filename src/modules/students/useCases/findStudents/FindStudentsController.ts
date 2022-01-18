import { Request, Response } from 'express'
import { FindStudentsUseCase } from './FindStudentsUseCase'

export class FindStudentsController {

  async handle(request: Request, response: Response) {

    const findStudentsUseCase = new FindStudentsUseCase()
    const result = await findStudentsUseCase.execute()

    return response.json(result)
  }
}