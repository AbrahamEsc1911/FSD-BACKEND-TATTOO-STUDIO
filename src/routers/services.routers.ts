import { Router  } from "express";
import { createNewServices, deleteServices, getAllServices, updateServices } from "../controllers/services.controller";
import { auth } from "../middlewares/auth";
import { isAdminOrSuper } from "../middlewares/isAdminOrSuper";

const router = Router()

router.get('/', getAllServices)
router.post('/', auth, isAdminOrSuper, createNewServices)
router.put('/:id', auth, isAdminOrSuper, updateServices)
router.delete('/:id', auth, isAdminOrSuper, deleteServices)

export { router }