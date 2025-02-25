import { Request, Response } from "express";
import { Appointments } from "../database/models/Appointments";

//// GET

export const getAppointmentsById = async (req: Request, res: Response) => {
    try {

        const appointmentId = Number(req.params.id)

        const appoinment = await Appointments.findOne(
            {
                select: {
                    id: true,
                    due_date: true,
                    user: {
                        id: true,
                        name: true,
                        email: true,
                    },
                    service: {
                        id: true,
                        name: true,
                        description: true,
                    },
                    artist: {
                        name: true,
                    }
                },

                where: {
                    id: appointmentId
                },
                relations: {
                    user: true,
                    service: true,
                    artist: true,
                }
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
                message: 'Appointment filter by Id',
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
                select: {
                    id: true,
                    due_date: true,
                    user: {
                        id: true,
                        name: true,
                        email: true,
                    },
                    service: {
                        id: true,
                        name: true,
                        description: true,
                    },
                    artist: {
                        name: true,
                    }
                },
                where: {
                    users_id: id
                },
                relations: {
                    user: true,
                    service: true,
                    artist: true,
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

//// PUT

export const createAppointments = async (req: Request, res: Response) => {
    try {

        const id = req.tokenData.id
        const { services_id, due_date, artists_id } = req.body
        const date = new Date()

        if (!services_id || !due_date || !artists_id) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'services, date and artist are required'
                }
            )
        }

        if (new Date(req.body.due_date) < date) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'The appointment date cannot be in the past'
                }
            )
        }

        const newAppointment = await Appointments.create(
            {
                users_id: id,
                services_id: Number(services_id),
                due_date: new Date(due_date),
                artists_id: artists_id
            }
        ).save()

        res.json(
            {
                success: true,
                message: 'Appointment created',
                data: newAppointment
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Internal Error adding new appointmens',
                error: error
            }
        )
    }
}

//// UPDATE
export const updateAppointments = async (req: Request, res: Response) => {
    try {
        const appoinmentId = Number(req.params.id)
        const {services_id, due_date, artists_id, is_active} = req.body
        const date = new Date()

        if (!appoinmentId) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'appointments Id is required'
                }
            )
        }

        if (new Date(req.body.due_date) < date) {
            return res.status(400).json(
                {
                    success: false,
                    message: 'The appointment date cannot be in the past'
                }
            )
        }

        const appoinmentUpdated = await Appointments.update({ id: appoinmentId }, {
            services_id: services_id,
            due_date: due_date,
            artists_id: artists_id,
            is_active: is_active
        })

        res.json(
            {
                success: true,
                message: 'Appointment update',
                data: appoinmentUpdated
            }
        )

    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Internal error updating an apointment',
                error: error
            }
        )
    }
}

export const deleteAppointmentesById = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id)

        const appoinmentDeleted = await Appointments.delete(id)

        if(appoinmentDeleted.affected === 0){
            return res.status(404).json(
                {
                    success: false,
                    message: 'nothing found to delete'
                }
            )
        }

        res.json(
            {
                success: true,
                message: 'Appointment deleted'
            }
        )
        
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: 'Error to delete appointment'
            }
        )
    }
}