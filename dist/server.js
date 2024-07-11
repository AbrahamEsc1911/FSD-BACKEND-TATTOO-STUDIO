"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = require("./database/db");
const router_1 = require("./router");
const app = (0, express_1.default)();
const port = process.env.PORTCONEXION || 3080;
///// MIDELWARE
app.use(express_1.default.json());
///// ROUTERS
app.use('/api', router_1.router);
db_1.AppDataSource.initialize()
    .then(() => {
    console.log('Database connected');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
    .catch(error => {
    console.log(error);
});
