import { NextFunction, Request, Response } from "express";

export const isSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {

        if (req.tokenData.role !== 3) {
            res.json(
                {
                    success: false,
                    message: 'you are not allowed'
                }
            )
        }

        next()

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'you are not allowed',
        })
    }
}