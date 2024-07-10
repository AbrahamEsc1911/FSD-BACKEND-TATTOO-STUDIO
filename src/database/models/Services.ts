import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"
import { Users } from "./Users"

@Entity('services')
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'description' })
    description!: string

    @Column({ name: 'created_at' })
    created_at!: Date

    @Column({ name: 'users_id' })
    users_id!: number

    @OneToMany(() => Appointments, (appointments) => appointments.service)
    appointments!: Appointments[]

    @ManyToOne(() => Users, (artists) => artists.services)
    @JoinColumn({ name: 'users_id' })
    artists!: Users
}
