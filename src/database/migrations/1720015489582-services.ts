import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Services1720015489582 implements MigrationInterface {

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
                    name: 'price',
                    type: 'Bigint'
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
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services')
    }

}
