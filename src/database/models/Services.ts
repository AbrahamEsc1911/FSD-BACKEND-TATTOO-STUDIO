import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"
import { Tattooist } from "./Tattooist"

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

    @Column({ name: 'tattooist_id' })
    tattooist_id!: number

    @OneToMany(() =>  Appointments, (appointments) =>appointments.service)
    appointments!: Appointments[]

    @ManyToOne(()=> Tattooist, (tattooist) => tattooist.services)
    @JoinColumn({ name: 'tattooist_id' })
    tattooist!: Tattooist
}
