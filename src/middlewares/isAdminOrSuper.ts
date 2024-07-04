import { NextFunction, Request, Response } from "express";

export const isAdminOrSuper = (req: Request, res: Response, next: NextFunction) => {

    try {
        
        if(req.tokenData.role !== 2 && req.tokenData.role !== 3){
            return res.status(401).json(
                {
                    success: false,
                    message: 'Unauthorize'
                }
            )
        }

        next()
    } catch (error) {
        
    }
}