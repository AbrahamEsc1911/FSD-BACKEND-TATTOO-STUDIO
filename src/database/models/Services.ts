import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('services')
export class Services extends BaseEntity {
    @PrimaryGeneratedColumn()
    id! : number

    @Column({ name : 'name'})
    name! : string

    @Column({ name : 'description'})
    description! : string

    @Column({ name : 'price'})
    price! : number

    @Column({ name : 'created_at'})
    created_at! : Date

    @Column({ name : 'updated_at'})
    updated_at! : Date

}
