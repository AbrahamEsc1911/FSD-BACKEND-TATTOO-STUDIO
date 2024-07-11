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
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsSeeders = void 0;
const db_1 = require("../db");
const Appointments_1 = require("../models/Appointments");
const appointmentsSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
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
        const newAppointments = yield createAppointment(appointments);
        yield Appointments_1.Appointments.save(newAppointments);
        console.log('===========================');
        console.log('Appointments seeder successfully');
        console.log('===========================');
    }
    catch (error) {
        console.log('===========================');
        console.log('ERROR APPOINTMENTS SEEDER', error.message);
        console.log('===========================');
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.appointmentsSeeders = appointmentsSeeders;
const createAppointment = (arr) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointments = [];
    arr.forEach((element) => {
        const appoinment = new Appointments_1.Appointments();
        appoinment.users_id = element.users_id;
        appoinment.services_id = element.services_id;
        appoinment.due_date = element.due_date;
        appoinment.artists_id = element.artists_id;
        newAppointments.push(appoinment);
    });
    return newAppointments;
});
