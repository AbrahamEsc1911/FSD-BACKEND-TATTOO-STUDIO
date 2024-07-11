"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const Roles_1 = require("./Roles");
const Appointments_1 = require("./Appointments");
let Users = class Users extends typeorm_1.BaseEntity {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'roles_id' }),
    __metadata("design:type", Number)
], Users.prototype, "roles_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email' }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'password' }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_active' }),
    __metadata("design:type", Boolean)
], Users.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Users.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Users.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Roles, roles => roles.users),
    (0, typeorm_1.JoinColumn)({ name: 'roles_id' }),
    __metadata("design:type", Roles_1.Roles)
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Appointments_1.Appointments, appointments => appointments.user),
    __metadata("design:type", Array)
], Users.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Appointments_1.Appointments, appointmentsArtist => appointmentsArtist.artist),
    __metadata("design:type", Array)
], Users.prototype, "appointmentsArtist", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)('users')
], Users);
