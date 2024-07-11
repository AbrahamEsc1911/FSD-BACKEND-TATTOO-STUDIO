import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./Users"
import { Services } from "./Services"

@Entity('appointments')
export class Appointments extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'users_id' })
    users_id!: number

    @Column({ name: 'services_id' })
    services_id!: number

    @Column({ name: 'due_date' })
    due_date!: Date

    @Column({ name: 'is_active' })
    is_active!: boolean

    @Column({ name: 'created_at' })
    created_at!: Date

    @Column({ name: 'updated_at' })
    updated_at!: Date

    @Column({ name: 'artists_id' })
    artists_id!: number

    @ManyToOne(() => Users, (user) => user.appointments)
    @JoinColumn({ name: 'users_id' })
    user!: Users

    @ManyToOne(() => Services, (service) => service.appointments)
    @JoinColumn({ name: 'services_id' })
    service!: Services

}
