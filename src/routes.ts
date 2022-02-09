import { Router } from 'express'
import { CreateStudentsController } from './modules/students/useCases/createStudents/CreateStudentsController'
import { CreateTeacherController } from './modules/teacher/useCases/createTeacher/CreateTeacherController'
import { CreateAulaController } from './modules/aula/useCases/createAulas/CreateAulaController'
import { AuthenticateStudentController } from './modules/account/authenticateStudent/AuthenticateStudentController'
import { AuthenticateTeacherController } from './modules/account/authenticateTeacher/AuthenticateTeacherController'
import { ensureAuthenticateTeacher } from './middlewares/ensureAuthenticateTeacher'
import { FindAulasController } from './modules/aula/useCases/findAulas/FindAulasController'
import { UpdateAulasController } from './modules/aula/useCases/updateAulas/UpdateAulasController'
import { FindStudentsController } from './modules/students/useCases/findStudents/FindStudentsController'
import { FindStudentsAulasController } from './modules/aula/useCases/findStudentsAulas/FindStudentsAulasController'


const routes = Router()

const createStudentsController = new CreateStudentsController()
const findStudentsController = new FindStudentsController()
const createTeacherController = new CreateTeacherController()
const createAulaController = new CreateAulaController()
const authenticateStudentController = new AuthenticateStudentController()
const authenticateTeacherController = new AuthenticateTeacherController()
const findAulasController = new FindAulasController()
const findStudentsAulasController = new FindStudentsAulasController()
const updateAulasController = new UpdateAulasController()

routes.post('/student/authenticate', authenticateStudentController.handle)
routes.post('/teacher/authenticate', authenticateTeacherController.handle)

routes.post('/teacher/', createTeacherController.handle)

routes.post('/student/', createStudentsController.handle)
routes.get('/students/', ensureAuthenticateTeacher, findStudentsController.handle)

routes.post('/aula/', ensureAuthenticateTeacher, createAulaController.handle)

routes.get('/aulas/', findAulasController.handle)
routes.get('/aulas/:id/students/', findStudentsAulasController.handle)
routes.patch('/aula/update/:id', updateAulasController.handle)


export { routes }