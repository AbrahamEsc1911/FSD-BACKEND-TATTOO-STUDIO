import { Router } from "express";
import { router as servicesRouters } from "./routers/services.routers";
import { router as rolesRouters} from "./routers/roles.routers";
import { router as authRouters } from "./routers/auth.routers";

const router = Router()

router.use('/services', servicesRouters)
router.use('/roles', rolesRouters)
router.use('/auth', authRouters)
router.use('/users')
router.use('/appointments')

export { router }