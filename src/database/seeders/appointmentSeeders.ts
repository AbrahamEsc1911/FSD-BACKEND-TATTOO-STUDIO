import { AppDataSource } from "../db"
import { Appointments } from "../models/Appointments";

export const appointmentsSeeders = async () => {
    try {

        await AppDataSource.initialize()

        const appointments = [
            { users_id: 5, services_id: 1, due_date: "2024-07-11", artists_id: '3' },
            { users_id: 6, services_id: 3, due_date: "2024-07-12", artists_id: '3' },
            { users_id: 7, services_id: 2, due_date: "2024-07-13", artists_id: '4' },
            { users_id: 8, services_id: 5, due_date: "2024-07-14", artists_id: '4' },
            { users_id: 5, services_id: 4, due_date: "2024-07-15", artists_id: '3' },
            { users_id: 6, services_id: 1, due_date: "2024-07-16", artists_id: '3' },
            { users_id: 7, services_id: 5, due_date: "2024-07-17", artists_id: '4' },
            { users_id: 8, services_id: 2, due_date: "2024-07-18", artists_id: '3' }
        ];

        const newAppointments = await createAppointment(appointments)

        await Appointments.save(newAppointments)

        console.log('===========================');
        console.log('Appointments seeder successfully');
        console.log('===========================');

    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR APPOINTMENTS SEEDER', error.message);
        console.log('===========================');

    } finally {

        await AppDataSource.destroy()

    }
}

const createAppointment = async (arr: object[]) => {
    const newAppointments: Appointments[] = []

    arr.forEach((element: any) => {

        const appoinment = new Appointments()
        appoinment.users_id = element.users_id
        appoinment.services_id = element.services_id
        appoinment.due_date = element.due_date
        appoinment.artists_id = element.artists_id
        newAppointments.push(appoinment)

    })

    return newAppointments
}