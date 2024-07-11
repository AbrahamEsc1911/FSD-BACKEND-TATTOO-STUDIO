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
exports.Appointments1720621586454 = void 0;
const typeorm_1 = require("typeorm");
class Appointments1720621586454 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'users_id',
                        type: 'int'
                    },
                    {
                        name: 'services_id',
                        type: 'int'
                    },
                    {
                        name: 'is_active',
                        type: 'Boolean',
                        default: true,
                    },
                    {
                        name: 'due_date',
                        type: 'datetime',
                        isNullable: false
                    },
                    {
                        name: 'created_at',
                        type: 'datetime',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'datetime',
                        default: 'now()',
                        onUpdate: 'now()'
                    },
                    {
                        name: 'artists_id',
                        type: 'int',
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['users_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id']
                    },
                    {
                        columnNames: ['artists_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id']
                    },
                    {
                        columnNames: ['services_id'],
                        referencedTableName: 'services',
                        referencedColumnNames: ['id']
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('appointments');
        });
    }
}
exports.Appointments1720621586454 = Appointments1720621586454;
