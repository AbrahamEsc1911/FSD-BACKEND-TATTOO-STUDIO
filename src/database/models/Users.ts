import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Roles } from "./Roles"
import { Appointments } from "./Appointments"
import { Services } from "./Services"

@Entity('users')
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'roles_id' })
    roles_id!: number

    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'email' })
    email!: string

    @Column({ name: 'password' })
    password!: string

    @Column({ name: 'is_active' })
    is_active!: boolean

    @Column({ name: 'created_at' })
    created_at!: Date

    @Column({ name: 'updated_at' })
    updated_at!: Date

    @ManyToOne(() => Roles, roles => roles.users)
    @JoinColumn({ name: 'roles_id' })
    role!: Roles

    @OneToMany(() => Appointments, appointments => appointments.user)
    appointments!: Appointments[]

    @OneToMany(() => Appointments, appointmentsArtist => appointmentsArtist.artist)
    appointmentsArtist!: Appointments[]
}
