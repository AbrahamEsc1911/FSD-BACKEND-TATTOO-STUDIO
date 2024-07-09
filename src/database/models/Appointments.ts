import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('appointments')
export class Appointments extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'user_id '})
    user_id!: number
    
    @Column({ name: 'services_id '})
    services_id!: number

    @Column({ name: 'due_date '})
    due_date!: Date

    @Column({ name: 'is_active '})
    is_active!: boolean

    @Column({ name: 'crated_at'})
    created_at!: Date

    @Column({ name: 'updated_at '})
    updated_at!: Date
}
