import { Request, Response } from 'express'
import { FindStudentsAulasUseCase } from './FindStudentsAulasUseCase'

export class FindStudentsAulasController {

  async handle(request: Request, response: Response) {
    const { id: id_aula } = request.params

    const findStudentsAulasUseCase = new FindStudentsAulasUseCase()
    const result = await findStudentsAulasUseCase.execute({ id_aula })

    return response.json(result)
  }
}