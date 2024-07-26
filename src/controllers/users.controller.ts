import bcrypt from 'bcrypt'
import { Request, Response } from "express";
import { Users } from "../database/models/Users";


//// GET

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const users = await Users.find(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    role: {
                        name: true,
                    }
                },
                relations: {
                    role: true,
                }
            }
        )

        res.json(
            {
                success: true,
                message: 'All users registed',
                data: users
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Error',
            error: error
        })
    }
}

export const getProfile = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id

        const userProfile = await Users.findOne(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    role: {
                        name: true,
                    }
                },
                where: {
                    id: id
                },
                relations: {
                    role: true,
                },
            }
        )

        res.json(
            {
                success: true,
                message: 'User profile',
                data: userProfile
            }
        )

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'error retriving user profile',
            error: error.message
        })
    }
}

export const getUserByEmail = async (req: Request, res: Response) => {
    try {

        const email = req.query.email as string


        const userByEmail = await Users.findOne({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                role: {
                    name: true,
                }
            },
            where: {
                email: email
            },
            relations: {
                role: true,
            }
        })

        if (!userByEmail) {
            return res.json(
                {
                    success: false,
                    message: 'anything found with that email'
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'user found',
                data: userByEmail
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error retreaving users by email',
                error: error
            }
        )
    }
}

export const getAllArtists = async (req: Request, res: Response) => {
    try {

        const artists = await Users.find(
            {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: {
                        name: true,
                    }
                },
                where: {
                    roles_id: 2
                },
                relations: {
                    role: true
                }
            }
        )

        if (!artists) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'No one artist to show'
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'All artists',
                data: artists
            }
        )

    } catch (error) {

        res.status(500).json(
            {
                success: false,
                message: 'Error retriving all artists',
                error: error
            }
        )

    }
}

//// PUT

export const updateUser = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id
        const { name, email } = req.body
        let password = req.body.password

        if (password) {
            password = bcrypt.hashSync(password, 10)
        }
        const body = { name: name, email: email, password: password }

        const user = await Users.findOne({
            where: {
                id: id
            }
        })

        if(!user){
            return res.status(404).json(
                {
                    success: false,
                    message: 'User not found',
                }
            )
        }

        if(user.name === name) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'can not updated your name if is the same'
                }
            )
        }

        if(user.email === email) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'can not updated your email if is the same'
                }
            )
        }

        const userUpdated = await Users.update(
            {
                id: Number(id)
            }, body,
        )

        res.json(
            {
                success: true,
                message: 'Profile updated successfully',
                data: userUpdated
            })

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: 'Error updating user data',
            error: error.message

        })
    }
}

export const updateRoleById = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id)

        const newRole = req.body.roles_id

        if (!newRole) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'please enter a new role or a valid params'
                }
            )
        }

        const roleUpdated = await Users.update(id, {
            roles_id: newRole
        }
        )

        res.json(
            {
                success: true,
                message: 'Role updated successfully',
                data: roleUpdated
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'internal error to change Role',
                error: error
            }
        )
    }
}

//// DELETE

export const deleteUser = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id)

        const userDeleted = await Users.delete(id)

        if (userDeleted.affected === 0) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'Any user to delete',
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'User deleted',
                data: userDeleted,
            }
        )

        //TODO Gestionar una eliminación on cascade porque sino cuando intente eliminar un usuario que 
        // tiene relacion con otras tablas, no lo puede eliminar.


    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error deleting user',
                error: error
            }
        )
    }
}
