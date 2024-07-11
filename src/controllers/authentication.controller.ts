import jwt from 'jsonwebtoken'
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { Users } from "../database/models/Users";

//// POST 
export const createUser = async (req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body

        if (!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'email and password are requiered'
                }
            )
        }

        if (password.length < 8 || password.length > 12) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'The password must be between 8 and 12 characters long'
                }
            )
        }

        const passHashed = bcrypt.hashSync(password, 10)

        const newUser = await Users.create({
            name: name,
            email: email,
            password: passHashed,
        }).save()

        res.json({
            success: true,
            message: 'User created',
            data: newUser
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Internar error',
                error: error
            }
        )
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'email and password are requiered'
                }
            )
        }

        const users = await Users.findOne({
            where: { email: email }
        })

        if (!users) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'email or password invalid'
                }
            )
        }

        const passCompared = bcrypt.compareSync(password, users.password)

        if (!passCompared) {
            return res.status(400).json(
                {
                    success: true,
                    message: 'email or password invalid'
                }
            )
        }

        const token = jwt.sign(
            {
                id: users.id,
                role: users.roles_id,
                email: users.email
            },
            process.env.SECRET_KEY as string,
            {
                expiresIn: "1h"
            }
        )

        res.json(
            {
                succes: true,
                message: 'User logged',
                data: token
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

export const createAdmin = async(req: Request, res: Response) => {
    try {

        const { name, email, password } = req.body

        if (!email || !password) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'email and password are requiered'
                }
            )
        }

        if (password.length < 8 || password.length > 12) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'The password must be between 8 and 12 characters long'
                }
            )
        }

        const passHashed = bcrypt.hashSync(password, 10)

        const newUser = await Users.create({
            name: name,
            email: email,
            password: passHashed,
            roles_id: 2
        }).save()

        res.json({
            success: true,
            message: 'User created',
            data: newUser
        })

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Internar error',
                error: error
            }
        )
    }
}