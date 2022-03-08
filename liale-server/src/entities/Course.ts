import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class Course extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    description: string;

    @Field(() => String)
    @Column()
    url: string;

    @Field(() => String)
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: Date;
}