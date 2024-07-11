import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { deleteUser, getAllArtists, getAllUsers, getProfile, getUserByEmail, updateRoleById, updateUser } from "../controllers/users.controller";

const router = Router()

router.get('/', auth, isSuperAdmin, getAllUsers)
router.get('/profile', auth, getProfile)
router.get('/filters', auth, isSuperAdmin, getUserByEmail)
router.get('/artists', getAllArtists)
router.put('/profile', auth, updateUser)
router.put('/:id/role', auth, isSuperAdmin, updateRoleById)
router.delete('/:id', auth, isSuperAdmin, deleteUser)

export { router }