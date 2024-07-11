import { Router } from "express";
import { createAdmin, createUser, loginUser } from "../controllers/authentication.controller";

const router = Router()

router.post('/register', createUser)
router.post('/admin', createAdmin)
router.post('/login', loginUser)

export { router }