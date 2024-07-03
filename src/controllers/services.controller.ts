import { Request, Response } from "express";
import { Services } from "../database/models/Services";


//// GET
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

//// POST

export const createNewServices = async (req : Request, res : Response) => {
    try {

        const { name, description} = req.body

        if(!name || !description) {
            return res.status(400).json({
                success: false,
                message: 'name and description are required'
            })
        }

        const createServices = await Services.create({
            name: name,
            description: description,
        }).save()
        
        res.json({
            success: true,
            message: 'new service created',
            data : createServices
        })
        
    } catch (error) {
        res.status(500).json({
            success : false,
            message : 'Error creating services',
            error : error
        })
    }
}