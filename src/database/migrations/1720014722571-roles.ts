import { query } from "express";
import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class Roles1720014722571 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'roles',
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
                    length: '20'
                }
            ]

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles')
    }

}
