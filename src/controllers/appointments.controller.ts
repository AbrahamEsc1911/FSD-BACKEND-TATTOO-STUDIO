import { Request, Response } from "express";
import { Appointments } from "../database/models/Appointments";

//// GET

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {

        const appointmentId = Number(req.params.id)

        const appoinment = await Appointments.findOne(
            {
                where: { id: appointmentId }
            }
        )

        if (!appoinment) {
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

export const getAllAppoinmentsByUserId = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id

        const userAppointments = await Appointments.find(
            {
                where: {
                    id: id
                }
            }
        )

        if (userAppointments.length === 0) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'nothing to show'
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'Showing all appointments by user ID',
                data: userAppointments
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'error retrieving appoinments by user ID',
                error: error
            }
        )
    }
}