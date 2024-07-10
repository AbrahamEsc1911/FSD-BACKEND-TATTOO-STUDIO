import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Services } from "./Services"

@Entity('artistss')
export class Artists extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name'})
    name!: string

    @OneToMany(() => Services, (service) =>service.artists)
    services!: Services[]
}
