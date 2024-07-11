"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const services_routers_1 = require("./routers/services.routers");
const roles_routers_1 = require("./routers/roles.routers");
const auth_routers_1 = require("./routers/auth.routers");
const users_routers_1 = require("./routers/users.routers");
const appointments_routers_1 = require("./routers/appointments.routers");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/services', services_routers_1.router);
router.use('/roles', roles_routers_1.router);
router.use('/auth', auth_routers_1.router);
router.use('/users', users_routers_1.router);
router.use('/appointments', appointments_routers_1.router);
