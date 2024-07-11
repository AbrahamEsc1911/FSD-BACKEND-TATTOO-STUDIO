import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { createAppointments, getAllAppoinmentsByUserId, getAppointmentsById, updateAppointments } from "../controllers/appointments.controller";

const router = Router()

router.get('/:id', auth, isSuperAdmin, getAppointmentsById)
router.get('/', auth, getAllAppoinmentsByUserId)
router.post('/', auth, createAppointments)
router.put('/', auth, updateAppointments)

export { router }