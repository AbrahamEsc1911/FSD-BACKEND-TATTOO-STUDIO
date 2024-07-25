import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointments } from "./Appointments"


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

    @OneToMany(() => Appointments, appointments => appointments.service, { cascade: true, onDelete: 'CASCADE' })
    appointments!: Appointments[]

}
