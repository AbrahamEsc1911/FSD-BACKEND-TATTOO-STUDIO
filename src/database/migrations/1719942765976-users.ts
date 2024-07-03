import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1719942765976 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'roles_id',
                    type: 'int'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '70',

                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '250',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '200',
                    isNullable: false,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    length: '15',
                    isUnique: true,
                },
                {
                    name: 'is_active',
                    type: 'Boolean',
                    default: true,
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'datetime',
                    default: 'now()',
                    onUpdate: 'now()',
                }
            ],
            foreignKeys: [
                {
                    columnNames: ['roles_id'],
                    referencedTableName: 'roles',
                    referencedColumnNames: ['id']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
