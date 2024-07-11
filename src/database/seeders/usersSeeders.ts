import { parse } from "dotenv";
import { AppDataSource } from "../db";
import { Users } from "../models/Users";
import bcrypt from 'bcrypt'


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
        console.log('===========================');


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

    arr.forEach((element: any, index: any) => {

        const passHashed = bcrypt.hashSync(element.password, 10)

        const user = new Users()
        user.id = index + 1
        user.roles_id = element.roles_id
        user.name = element.name
        user.email = element.email
        user.password = passHashed
        newUsers.push(user)
    })

    return newUsers;
}