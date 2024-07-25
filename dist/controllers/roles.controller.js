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
exports.deleteRoles = exports.createRoles = exports.getAllRoles = void 0;
const Roles_1 = require("../database/models/Roles");
/////GET
const getAllRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allRoles = yield Roles_1.Roles.find({
            select: {
                name: true,
                users: {
                    name: true,
                    email: true,
                }
            },
            relations: {
                users: true
            }
        });
        res.json({
            success: true,
            message: 'get all roles',
            data: allRoles
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retreving roles',
            error: error
        });
    }
});
exports.getAllRoles = getAllRoles;
//// POST
const createRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        const newRole = yield Roles_1.Roles.create({
            name: name
        }).save();
        res.json({
            success: true,
            message: 'New role created',
            date: newRole
        });
    }
    catch (error) {
        res.status(500).json({
            success: true,
            message: 'Internar error creating new role',
            error: error
        });
    }
});
exports.createRoles = createRoles;
//// DELETE
const deleteRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const roleDeleted = yield Roles_1.Roles.delete(id);
        if (!roleDeleted.affected) {
            return res.status(400).json({
                success: false,
                message: `couldnt find role ${id}`
            });
        }
        res.json({
            success: true,
            message: 'role deleted',
            date: roleDeleted
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal error',
            error: error
        });
    }
});
exports.deleteRoles = deleteRoles;
