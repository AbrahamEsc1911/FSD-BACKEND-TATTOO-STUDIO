import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";
import { TokenDecoded } from '../types';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    try {

        if (!req.headers.authorization) {
            return res.status(400).json({
                success: false,
                message: 'Unauthorized',
            })
        }

        const token = req.headers.authorization.split(" ")[1];
        const decode = jwt.verify(token, process.env.SECRET_KEY as string) as TokenDecoded

        req.tokenData = {
            id: decode.id,
            role: decode.role,
            email: decode.email
        }

        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Unauthorized'
        })

    }
}