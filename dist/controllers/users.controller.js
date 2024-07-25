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
exports.deleteUser = exports.updateRoleById = exports.updateUser = exports.getAllArtists = exports.getUserByEmail = exports.getProfile = exports.getAllUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = require("../database/models/Users");
//// GET
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Users_1.Users.find({
            select: {
                name: true,
                email: true,
                created_at: true,
                role: {
                    name: true,
                }
            },
            relations: {
                role: true,
            }
        });
        res.json({
            success: true,
            message: 'All users registed',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Error',
            error: error
        });
    }
});
exports.getAllUsers = getAllUsers;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.tokenData.id;
        const userProfile = yield Users_1.Users.findOne({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                role: {
                    name: true,
                }
            },
            where: {
                id: id
            },
            relations: {
                role: true,
            },
        });
        res.json({
            success: true,
            message: 'User profile',
            data: userProfile
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'error retriving user profile',
            error: error.message
        });
    }
});
exports.getProfile = getProfile;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const userByEmail = yield Users_1.Users.findOne({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
                role: {
                    name: true,
                }
            },
            where: {
                email: email
            },
            relations: {
                role: true,
            }
        });
        if (!userByEmail) {
            return res.json({
                success: false,
                message: 'anything found with that email'
            });
        }
        res.json({
            success: true,
            message: 'user found',
            data: userByEmail
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retreaving users by email',
            error: error
        });
    }
});
exports.getUserByEmail = getUserByEmail;
const getAllArtists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const artists = yield Users_1.Users.find({
            select: {
                name: true,
                email: true,
                role: {
                    name: true,
                }
            },
            where: {
                roles_id: 2
            },
            relations: {
                role: true
            }
        });
        if (!artists) {
            return res.status(400).json({
                success: false,
                message: 'No one artist to show'
            });
        }
        res.json({
            success: true,
            message: 'All artists',
            data: artists
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retriving all artists',
            error: error
        });
    }
});
exports.getAllArtists = getAllArtists;
//// PUT
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.tokenData.id;
        const { name, email } = req.body;
        let password = req.body.password;
        if (password) {
            password = bcrypt_1.default.hashSync(password, 10);
        }
        const body = { name: name, email: email, password: password };
        const userUpdated = yield Users_1.Users.update({
            id: Number(id)
        }, body);
        res.json({
            success: true,
            message: 'Profile updated successfully',
            data: userUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Wrong request to update user profile',
            error: error.message
        });
    }
});
exports.updateUser = updateUser;
const updateRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const newRole = req.body.roles_id;
        if (!newRole) {
            return res.status(400).json({
                success: false,
                message: 'please enter a new role or a valid params'
            });
        }
        const roleUpdated = yield Users_1.Users.update(id, {
            roles_id: newRole
        });
        res.json({
            success: true,
            message: 'Role updated successfully',
            data: roleUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'internal error to change Role',
            error: error
        });
    }
});
exports.updateRoleById = updateRoleById;
//// DELETE
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const userDeleted = yield Users_1.Users.delete(id);
        if (userDeleted.affected === 0) {
            return res.status(400).json({
                success: false,
                message: 'Any user to delete',
            });
        }
        res.json({
            success: true,
            message: 'User deleted',
            data: userDeleted,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting user',
            error: error
        });
    }
});
exports.deleteUser = deleteUser;
