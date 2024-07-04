import { Request, Response } from "express";
import { Users } from "../database/models/Users";

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const allUsers = Users.find()

        res.json(
            {
                success: true,
                message: 'All users registed',
                data : allUsers
            }
        )
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Error',
            error : error
        })
    }
}