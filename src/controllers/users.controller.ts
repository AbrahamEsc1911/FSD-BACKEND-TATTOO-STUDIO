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

/////TODO
// export const getUserByEmail = async(req: Request, res: Response) => {
//     try {

//         const email = req.query.email

//         const filterEmail = await Users.findOne(
//             {
//                 where: {
//                     email: email,
//                 }
//             }
//         )

//         if(!filterEmail){
//             return res.status(400).json(
//                 {
//                     success: false,
//                     message: 'couldnt find the email'
//                 }
//             )
//         }

//         res.json(
//             {
//                 success: true,
//                 message: 'Email filter',
//                 data: filterEmail
//             }
//         )

//     } catch (error) {
//         res.status(500).json({
//             success: true,
//             message: 'Error retrieving data',
//             error: error
//         })
//     }
// }

export const updateUser = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id
        const body = req.body

        if(!body){
            return res.status(400).json(
                {
                    success: false,
                    message: 'nothing to update'
                }
            )
        }

        const userUpdated = await Users.update(
            {
                id: Number(id)
            }, body
        )

        res.json(
            {
                succes: true,
                message: 'Profile updated successfully',
                data: userUpdated
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Wrong request to update user profile',
            error: error
        })

    }
}

