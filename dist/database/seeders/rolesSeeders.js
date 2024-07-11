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
exports.rolesSeeders = void 0;
const db_1 = require("../db");
const Roles_1 = require("../models/Roles");
const rolesSeeders = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const user = new Roles_1.Roles();
        user.id = 1;
        user.name = 'user';
        yield user.save();
        const admin = new Roles_1.Roles();
        admin.id = 2;
        admin.name = 'admin';
        yield admin.save();
        const superAdmin = new Roles_1.Roles();
        superAdmin.id = 3;
        superAdmin.name = 'super_admin';
        yield superAdmin.save();
        console.log('===========================');
        console.log('Roles seeder successfully');
        console.log('===========================');
    }
    catch (error) {
        console.log('===========================');
        console.log('ERROR ROLES SEEDER', error.message);
        console.log('===========================');
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.rolesSeeders = rolesSeeders;
