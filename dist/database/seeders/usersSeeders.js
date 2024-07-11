"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSeeders = void 0;
const db_1 = require("../db");
const Users_1 = require("../models/Users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const users = [
            { name: "Abraham Escobar", email: "abraham.escobar@example.com", password: "12345678", roles_id: 3 },
            { name: "Bob Smith", email: "bob.smith@example.com", password: "12345678", roles_id: 3 },
            { name: "Carol Williams", email: "carol.williams@example.com", password: "12345678", roles_id: 2 },
            { name: "David Brown", email: "david.brown@example.com", password: "12345678", roles_id: 2 },
            { name: "Eve Davis", email: "eve.davis@example.com", password: "12345678", roles_id: 1 },
            { name: "Frank Miller", email: "frank.miller@example.com", password: "12345678", roles_id: 1 },
            { name: "Grace Wilson", email: "grace.wilson@example.com", password: "12345678", roles_id: 1 },
            { name: "Hank Moore", email: "hank.moore@example.com", password: "12345678", roles_id: 1 }
        ];
        const newUsers = yield createUsers(users);
        yield Users_1.Users.save(newUsers);
        console.log('===========================');
        console.log('Users seeder successfully');
        console.log('===========================');
    }
    catch (error) {
        console.log('===========================');
        console.log('ERROR USERS SEEDER', error.message);
        console.log('===========================');
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.usersSeeders = usersSeeders;
const createUsers = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    const newUsers = [];
    arr.forEach((element, index) => {
        const passHashed = bcrypt_1.default.hashSync(element.password, 10);
        const user = new Users_1.Users();
        user.id = index + 1;
        user.roles_id = element.roles_id;
        user.name = element.name;
        user.email = element.email;
        user.password = passHashed;
        newUsers.push(user);
    });
    return newUsers;
});
