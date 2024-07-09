import { BaseEntity, Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('tattooist')
export class Tattooist extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    name!: string
}
