import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./Users"

@Entity('roles')
export class Roles extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @OneToMany(() => Users, (users) => users.role)
    users!: Users[]

}
