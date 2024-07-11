import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { createRoles, deleteRoles, getAllRoles } from "../controllers/roles.controller";

const router = Router()

router.get('/', auth, isSuperAdmin, getAllRoles)
router.post('/', auth, isSuperAdmin, createRoles)
router.delete('/:id', auth, isSuperAdmin, deleteRoles)

export { router }