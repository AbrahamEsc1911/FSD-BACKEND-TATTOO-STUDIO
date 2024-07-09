import { Request, Response } from "express";
import { Appointments } from "../database/models/Appointments";

//// GET

export const  getAppointments = async (req: Request, res: Response) => {
    try {

        const appointmentId = Number(req.params.id)

        const appoinment = await Appointments.findOne(
            {
                where: {id: appointmentId}
            }
        )

        if(!appoinment){
            return res.status(400).json(
                {
                    success: false,
                    message: 'No one oppointment to show'
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'Date filter by Id',
                data: appoinment
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error retrieving appointments',
                error: error
            }
        )
    }
}

