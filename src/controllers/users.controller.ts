import { Request, Response } from "express";
import { Users } from "../database/models/Users";


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
                where: {
                    id: id 
                }
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