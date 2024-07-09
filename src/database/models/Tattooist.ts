import { BaseEntity, Collection, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Services } from "./Services"

@Entity('tattooist')
export class Tattooist extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    name!: string

    @OneToMany(() => Services, (service) =>service.tattooist)
    service!: Services[]
}
