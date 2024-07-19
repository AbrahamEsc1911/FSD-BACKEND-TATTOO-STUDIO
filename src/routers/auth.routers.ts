import { Router } from "express";
import { createAdmin, createUser, loginUser } from "../controllers/authentication.controller";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

router.post('/register', createUser)
router.post('/admin', isSuperAdmin, createAdmin)
router.post('/login', loginUser)

export { router }