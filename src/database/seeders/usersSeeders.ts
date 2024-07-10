import { AppDataSource } from "../db";
import { Users } from "../models/Users";


export const usersSeeders = async () => {
    try {

        await AppDataSource.initialize()

        const users = [
            { name: "Alice Johnson", email: "alice.johnson@example.com", password: "12345678", roles_id: 3 },
            { name: "Bob Smith", email: "bob.smith@example.com", password: "12345678", roles_id: 3 },
            { name: "Carol Williams", email: "carol.williams@example.com", password: "12345678", roles_id: 2 },
            { name: "David Brown", email: "david.brown@example.com", password: "12345678", roles_id: 2 },
            { name: "Eve Davis", email: "eve.davis@example.com", password: "12345678", roles_id: 1 },
            { name: "Frank Miller", email: "frank.miller@example.com", password: "12345678", roles_id: 1 },
            { name: "Grace Wilson", email: "grace.wilson@example.com", password: "12345678", roles_id: 1 },
            { name: "Hank Moore", email: "hank.moore@example.com", password: "12345678", roles_id: 1 }
        ];

        const newUsers = await createUsers(users)

        await Users.save(newUsers)

        console.log('===========================');
        console.log('Users seeder successfully');


    } catch (error: any) {

        console.log('===========================');
        console.log('ERROR USERS SEEDER', error.message);
        console.log('===========================');

    } finally {

        await AppDataSource.destroy()

    }
}


const createUsers = async (arr: object[]) => {
    const newUsers: Users[] = []

    arr.forEach((elemento: any, index: any) => {

        const user = new Users()
        user.id = index + 1
        user.roles_id = elemento.roles_id
        user.name = elemento.name
        user.email = elemento.email
        user.password = elemento.password
        newUsers.push(user)
    })

    return newUsers;
}