import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('roles')
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

}
