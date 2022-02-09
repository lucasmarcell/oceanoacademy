import { Request, Response } from 'express'
import { FindStudentsAulasUseCase } from './FindStudentsAulasUseCase'

export class FindStudentsAulasController {

  async handle(request: Request, response: Response) {
    const { id_students, presence, lesson } = request.body
    const { id_teacher } = request

    const findStudentsAulasUseCase = new FindStudentsAulasUseCase()
    const result = await findStudentsAulasUseCase.execute()

    return response.json(result)
  }
}