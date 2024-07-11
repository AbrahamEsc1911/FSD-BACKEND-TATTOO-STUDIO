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
const appointmentesSeeders_1 = require("./appointmentesSeeders");
const rolesSeeders_1 = require("./rolesSeeders");
const servicesSeeders_1 = require("./servicesSeeders");
const usersSeeders_1 = require("./usersSeeders");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('starting seeders...');
    yield (0, rolesSeeders_1.rolesSeeders)();
    yield (0, usersSeeders_1.usersSeeders)();
    yield (0, servicesSeeders_1.servicesSeeders)();
    yield (0, appointmentesSeeders_1.appointmentsSeeders)();
    console.log('finish seeders');
}))();
