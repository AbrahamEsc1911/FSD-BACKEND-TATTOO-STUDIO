import { Router } from "express";
import { router as servicesRouters } from "./routers/services.routers";
import { router as rolesRouters} from "./routers/roles.routers";
import { router as authRouters } from "./routers/auth.routers";
import { router as usersRouters } from "./routers/users.routers";
import { router as appointmentsRouters } from "./routers/appointments.routers";

const router = Router()

router.use('/services', servicesRouters)
router.use('/roles', rolesRouters)
router.use('/auth', authRouters)
router.use('/users', usersRouters)
router.use('/appointments', appointmentsRouters)

export { router }