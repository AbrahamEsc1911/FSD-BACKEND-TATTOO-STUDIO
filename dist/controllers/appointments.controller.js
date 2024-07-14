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
exports.updateAppointments = exports.createAppointments = exports.getAllAppoinmentsByUserId = exports.getAppointmentsById = void 0;
const Appointments_1 = require("../database/models/Appointments");
//// GET
const getAppointmentsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = Number(req.params.id);
        const appoinment = yield Appointments_1.Appointments.findOne({
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
        });
        if (!appoinment) {
            return res.status(400).json({
                success: false,
                message: 'No one oppointment to show'
            });
        }
        res.json({
            success: true,
            message: 'Appointment filter by Id',
            data: appoinment
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving appointments',
            error: error
        });
    }
});
exports.getAppointmentsById = getAppointmentsById;
const getAllAppoinmentsByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.tokenData.id;
        const userAppointments = yield Appointments_1.Appointments.find({
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
        });
        if (userAppointments.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'nothing to show'
            });
        }
        res.json({
            success: true,
            message: 'Showing all appointments by user ID',
            data: userAppointments
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'error retrieving appoinments by user ID',
            error: error
        });
    }
});
exports.getAllAppoinmentsByUserId = getAllAppoinmentsByUserId;
//// PUT
const createAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.tokenData.id;
        const { services_id, due_date, artists_id } = req.body;
        const date = new Date();
        if (!services_id || !due_date || !artists_id) {
            return res.status(400).json({
                success: false,
                message: 'services, date and artist are required'
            });
        }
        if (new Date(req.body.due_date) < date) {
            return res.status(400).json({
                success: false,
                message: 'The appointment date cannot be in the past'
            });
        }
        const newAppointment = yield Appointments_1.Appointments.create({
            users_id: id,
            services_id: Number(services_id),
            due_date: new Date(due_date),
            artists_id: artists_id
        }).save();
        res.json({
            success: true,
            message: 'Appointment created',
            data: newAppointment
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Error adding new appointmens',
            error: error
        });
    }
});
exports.createAppointments = createAppointments;
//// UPDATE
const updateAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appoinmentId = Number(req.params.id);
        const body = req.body;
        const date = new Date();
        if (!appoinmentId) {
            return res.status(400).json({
                success: false,
                message: 'appointments Id is required'
            });
        }
        if (new Date(req.body.due_date) < date) {
            return res.status(400).json({
                success: false,
                message: 'The appointment date cannot be in the past'
            });
        }
        const appoinmentUpdated = yield Appointments_1.Appointments.update({ id: appoinmentId }, body);
        res.json({
            success: true,
            message: 'Appointment update',
            data: appoinmentUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal error updating an apointment',
            error: error
        });
    }
});
exports.updateAppointments = updateAppointments;
