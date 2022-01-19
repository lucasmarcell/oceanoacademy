import { Request, Response } from 'express'
import { UpdateAulasUseCase } from './UpdateAulasUseCase'

export class UpdateAulasController {

  async handle(request: Request, response: Response) {
    const { id_students } = request.body
    const { id: id_aula } = request.params

    const updateAulasUseCase = new UpdateAulasUseCase()
    const result = await updateAulasUseCase.execute({ id_aula, id_students })

    return response.json(result)
  }
}
