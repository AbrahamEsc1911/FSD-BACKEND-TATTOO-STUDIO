import { Request, Response } from "express";
import { Roles } from "../database/models/Roles";


/////GET

export const getAllRoles = async (req: Request, res: Response) => {
    try {

        const allRoles = await Roles.find(
            {
                select: {
                    name: true,
                    users: {
                        name: true,
                        email: true,
                    }
                },
                relations: {
                    users: true
                }
            }
        )

        res.json(
            {
                success: true,
                message: 'get all roles',
                data: allRoles
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retreving roles',
            error: error
        })
    }
}

//// POST

export const createRoles = async (req: Request, res: Response) => {
    try {
        const name = req.body.name

        const newRole = await Roles.create(
            {
                name: name
            }
        ).save()

        res.json({
            success: true,
            message: 'New role created',
            date: newRole
        })

    } catch (error) {
        res.status(500).json(
            {
                success: true,
                message: 'Internar error creating new role',
                error: error
            }
        )
    }
}

//// DELETE

export const deleteRoles = async (req: Request, res: Response) => {
    try {

        const id = req.params.id

        const roleDeleted = await Roles.delete(id)

        if (!roleDeleted.affected) {
            return res.status(400).json(
                {
                    success: false,
                    message: `couldnt find role ${id}`
                }
            )
        }

        res.json({
            succes: true,
            message: 'role deleted',
            date: roleDeleted
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'internal error',
                error: error
            }
        )
    }
}