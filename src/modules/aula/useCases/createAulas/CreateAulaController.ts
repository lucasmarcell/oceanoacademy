import { Request, Response } from 'express'
import { CreateAulaUseCase } from './CreateAulaUseCase'

export class CreateAulaController {

  async handle(request: Request, response: Response) {
    const { id_students, presence, lesson, students } = request.body
    const { id_teacher } = request

    const createAulaUseCase = new CreateAulaUseCase()
    const result = await createAulaUseCase.execute({
      id_students,
      id_teacher,
      presence,
      lesson,
      students
    })

    return response.json(result)
  }
}
