import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Services1720539771695 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'services',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '120',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'datetime',
                    default: 'now()'
                },
                {
                    name: 'tattoist_id',
                    type: 'int'
                },
            ], foreignKeys: [
                {
                    columnNames: ['tattoist_id'],
                    referencedTableName: 'tattooist',
                    referencedColumnNames: ['id']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services')
    }

}
