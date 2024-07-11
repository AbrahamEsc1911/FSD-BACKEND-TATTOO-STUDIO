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
exports.deleteServices = exports.updateServices = exports.createNewServices = exports.getAllServices = void 0;
const Services_1 = require("../database/models/Services");
//// GET
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield Services_1.Services.find();
        res.json({
            success: true,
            message: 'All services retrieve',
            data: services
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retriving services',
            rerror: error
        });
    }
});
exports.getAllServices = getAllServices;
//// POST
const createNewServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({
                success: false,
                message: 'name, description and artists are required'
            });
        }
        /////TODO: validación de super_admin
        const createServices = yield Services_1.Services.create({
            name: name,
            description: description,
        }).save();
        res.json({
            success: true,
            message: 'new service created',
            data: createServices
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating services',
            error: error
        });
    }
});
exports.createNewServices = createNewServices;
//// PUT
const updateServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const body = req.body;
        const serviceUpdated = yield Services_1.Services.update({ id: parseInt(id) }, body);
        if (!serviceUpdated.affected) {
            return res.status(400).json({
                success: false,
                message: 'Service doesnt exist'
            });
        }
        res.json({
            success: true,
            message: 'service updated',
            data: serviceUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating services',
            error: error
        });
    }
});
exports.updateServices = updateServices;
//// DELETE
const deleteServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const serviceDeleted = yield Services_1.Services.delete(id);
        if (!serviceDeleted.affected) {
            return res.status(400).json({
                success: false,
                message: 'Service doesnt exist'
            });
        }
        res.json({
            success: true,
            message: `services No. ${id} deleted`
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: "Error trying to delete this service",
            error: error
        });
    }
});
exports.deleteServices = deleteServices;
