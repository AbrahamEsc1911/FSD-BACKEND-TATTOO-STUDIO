import { Request, Response } from "express";
import { Services } from "../database/models/Services";



//// GET
export const getAllServices = async (req: Request, res: Response) => {
    try {

        const services = await Services.find()

        res.json({
            success: true,
            message: 'All services retrieve',
            data: services
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retriving services',
            rerror: error
        })
    }
}

//// POST

export const createNewServices = async (req: Request, res: Response) => {
    try {

        const { name, description, artists } = req.body

        if (!name || !description || artists) {
            return res.status(400).json({
                success: false,
                message: 'name, description and artists are required'
            })
        }

        /////TODO: validación de super_admin

        const createServices = await Services.create({
            name: name,
            description: description,
            artists: artists
        }).save()

        res.json({
            success: true,
            message: 'new service created',
            data: createServices
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating services',
            error: error
        })
    }
}

//// PUT

export const updateServices = async (req: Request, res: Response) => {
    try {

        const id = req.params.id
        const body = req.body

        const serviceUpdated = await Services.update({ id: parseInt(id) }, body)

        if (!serviceUpdated.affected) {
            return res.status(400).json({
                success: false,
                message: 'Service doesnt exist'
            })
        }

        res.json({
            success: true,
            message: 'service updated',
            data: serviceUpdated
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating services',
            error: error
        })
    }
}

//// DELETE

export const deleteServices = async (req: Request, res: Response) => {
    try {

        const id = req.params.id

        const serviceDeleted = await Services.delete(id)

        if (!serviceDeleted.affected) {
            return res.status(400).json({
                success: false,
                message: 'Service doesnt exist'
            })
        }

        res.json({
            success: true,
            message: `services No. ${id} deleted`
        })

    } catch (error) {
        res.status(500).json({
            success: true,
            message: "Server error",
            error: error
        })
    }
}