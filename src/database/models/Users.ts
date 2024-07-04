import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

    @Column({ name: 'password'})
    password!: string

    @Column({ name: 'is_active'})
    is_active!: boolean

    @Column({ name: 'created_at'})
    created_at!: Date

    @Column({ name: 'updated_at'})
    updated_at!:Date
}
