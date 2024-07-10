import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"
import { Artists } from "./Artists"

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

    @Column({ name: 'artists_id' })
    artists_id!: number

    @OneToMany(() =>  Appointments, (appointments) =>appointments.service)
    appointments!: Appointments[]

    @ManyToOne(()=> Artists, (artists) => artists.services)
    @JoinColumn({ name: 'artists_id' })
    artists!: Artists
}
