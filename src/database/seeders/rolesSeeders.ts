import { AppDataSource } from "../db"
import { Roles } from "../models/Roles";


export const rolesSeeders = async () => {
    try {

        await AppDataSource.initialize()

        const user = new Roles()
        user.id = 1
        user.name = 'user'

        await user.save()

        const admin = new Roles()
        admin.id = 2
        admin.name = 'admin'

        await admin.save()

        const superAdmin = new Roles()
        superAdmin.id = 3
        superAdmin.name = 'super_admin'

        await superAdmin.save()

        console.log('===========================');
        console.log('Roles seeder successfully');


    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR ROLES SEEDER', error.message);
        console.log('===========================');

    } finally {

        await AppDataSource.destroy()

    }
}