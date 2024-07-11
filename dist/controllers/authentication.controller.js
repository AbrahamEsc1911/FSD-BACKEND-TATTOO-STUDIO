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
exports.createAdmin = exports.loginUser = exports.createUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const Users_1 = require("../database/models/Users");
//// POST 
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'email and password are requiered'
            });
        }
        if (password.length < 8 || password.length > 12) {
            return res.status(400).json({
                success: false,
                message: 'The password must be between 8 and 12 characters long'
            });
        }
        const passHashed = bcrypt_1.default.hashSync(password, 10);
        const newUser = yield Users_1.Users.create({
            name: name,
            email: email,
            password: passHashed,
        }).save();
        res.json({
            success: true,
            message: 'User created',
            data: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internar error',
            error: error
        });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'email and password are required'
            });
        }
        const users = yield Users_1.Users.findOne({
            where: { email: email }
        });
        if (!users) {
            return res.status(400).json({
                success: false,
                message: 'email or password invalid'
            });
        }
        const passCompared = bcrypt_1.default.compareSync(password, users.password);
        if (!passCompared) {
            return res.status(400).json({
                success: true,
                message: 'email or password invalid'
            });
        }
        const token = jsonwebtoken_1.default.sign({
            id: users.id,
            role: users.roles_id,
            email: users.email
        }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        res.json({
            succes: true,
            message: 'User logged',
            data: token
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
exports.loginUser = loginUser;
const createAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'email and password are requiered'
            });
        }
        if (password.length < 8 || password.length > 12) {
            return res.status(400).json({
                success: false,
                message: 'The password must be between 8 and 12 characters long'
            });
        }
        const passHashed = bcrypt_1.default.hashSync(password, 10);
        const newUser = yield Users_1.Users.create({
            name: name,
            email: email,
            password: passHashed,
            roles_id: 2
        }).save();
        res.json({
            success: true,
            message: 'User created',
            data: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internar error',
            error: error
        });
    }
});
exports.createAdmin = createAdmin;
