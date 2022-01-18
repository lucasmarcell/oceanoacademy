import { Request, Response } from 'express'
import { UpdateAulasUseCase } from './UpdateAulasUseCase'

export class UpdateAulasController {

  async handle(request: Request, response: Response) {
    /* const { id_students, presence, lesson, students } = request.body
    const { id_teacher } = request */

    const updateAulasUseCase = new UpdateAulasUseCase()
    const result = await updateAulasUseCase.execute()

    return response.json(result)
  }
}
