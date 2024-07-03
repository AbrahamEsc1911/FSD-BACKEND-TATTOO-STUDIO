import { Request, Response } from "express";
import { Services } from "../database/models/Services";

export const getAllServices = async (req : Request, res : Response) => {
    try {

        const services = await Services.find()

        res.json({
            success : true,
            message : 'All services retrieve',
            data : services
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Error retriving services',
            rerror : error
        })
    }
}