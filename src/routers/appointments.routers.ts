import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { createAppointments, deleteAppointmentesById, getAllAppoinmentsByUserId, getAppointmentsById, updateAppointments } from "../controllers/appointments.controller";

const router = Router()

router.get('/:id', auth, isSuperAdmin, getAppointmentsById)
router.get('/', auth, getAllAppoinmentsByUserId)
router.post('/', auth, createAppointments)
router.put('/:id', auth, updateAppointments)
router.delete('/:id', auth, deleteAppointmentesById)

export { router }