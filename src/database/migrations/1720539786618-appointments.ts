import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Appointments1720539786618 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['users_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id']

                },
                {
                    columnNames: ['services_id'],
                    referencedTableName: 'services',
                    referencedColumnNames: ['id']
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }

}
