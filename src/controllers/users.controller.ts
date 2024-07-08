import bcrypt from 'bcrypt'
import { Request, Response } from "express";
import { Users } from "../database/models/Users";
import { Roles } from "../database/models/Roles";
import { parse } from "dotenv";


//// GET

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const users = await Users.find(
            {
                select: {
                    name: true,
                    email: true,
                    roles_id: true,
                    is_active: true,
                    created_at: true,

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
                    name: true,
                    email: true,
                    roles_id: true

                },
                where: {
                    id: id

                    ////TODO RELATIONS:
                }, 
            }
        )

        res.json(
            {
                succes: true,
                message: 'User profile',
                data: userProfile
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error retriving user profile'
        })
    }
}

/////TODO
export const getUserByEmail = async (req: Request, res: Response) => {
    try {

        const email = req.query.email as string


        const userByEmail = await Users.findOne({
            where: { email: email }
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
                message: 'Error retreaving users by email'
            }
        )
    }
}

////TODO
export const updateUser = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id
        const { name, email, password } = req.body
        const passHashed = bcrypt.hashSync(password, 10)
        const body = { name: name, email: email, password: passHashed }
        console.log(body)


        const userUpdated = await Users.update(
            {
                id: Number(id)
            }, body,
        )

        res.json(
            {
                succes: true,
                message: 'Profile updated successfully',
                data: userUpdated
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Wrong request to update user profile',
            error: error

        })
    }
}

export const updateRoleById = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id)
        const newRole = req.body ///TODO (Seleccionar unicamente que actualice roles_id, no cualquier cosa sin dar error)

        if (!newRole) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'please enter a new role or a valid params'
                }
            )
        }

        const roleUpdated = await Users.update(
            {
                id: id
            }, newRole
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
