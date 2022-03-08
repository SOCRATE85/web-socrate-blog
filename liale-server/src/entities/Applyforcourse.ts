import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Applyforcourse extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    firstname: string;

    @Field(() => String)
    @Column()
    lastname: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column()
    phone: string;

    @Field(() => String)
    @Column()
    dateofbirth: Date;

    @Field(() => String)
    @Column()
    gender: string;

    @Field(() => String)
    @Column()
    street1: string;
    
    @Field(() => String)
    @Column()
    street2: string;

    @Field(() => String)
    @Column()
    city: string;

    @Field(() => String)
    @Column()
    state: string;

    @Field(() => String)
    @Column()
    country: string;

    @Field(() => String)
    @Column()
    postalcode: string;

    @Field(() => String)
    @Column()
    isreferby: string;

    @Field(() => String)
    @Column()
    course: string;

    @Field(() => String)
    @Column()
    educationlevel: string;

    @Field(() => Int)
    @Column()
    areabackground: number;

    @Field(() => String)
    @Column()
    areaofspecility: string;

    @Field(() => Int)
    @Column()
    doyouemployied: number;

    @Field(() => String)
    @Column()
    referby: string;

    @Field(() => String)
    @Column()
    promocode: string;

    @Field(() => String)
    @CreateDateColumn({ name: "created_at"})
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn({name: "updated_at"})
    updatedAt: Date;
}