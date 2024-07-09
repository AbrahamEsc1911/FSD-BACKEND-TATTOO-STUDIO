import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"

@Entity('services')
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id! : number

    @Column({ name : 'name'})
    name! : string

    @Column({ name : 'description'})
    description! : string

    @Column({ name : 'created_at'})
    created_at! : Date

    @OneToMany(() =>  Appointments, (appointments) =>appointments.service)
    appointments!: Appointments[]
}
