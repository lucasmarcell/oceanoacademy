import { Request, Response } from 'express'
import { FindAulasUseCase } from './FindAulasUseCase'

export class FindAulasController {

  async handle(request: Request, response: Response) {
    const { id_students, presence, lesson } = request.body
    const { id_teacher } = request

    const findAulasUseCase = new FindAulasUseCase()
    const result = await findAulasUseCase.execute()

    return response.json(result)
  }
}