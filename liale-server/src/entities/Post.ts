import { 
    BaseEntity, 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from "typeorm";
import { Field, Int, ObjectType } from "type-graphql";
import { User } from "./User";
import { Updoot } from "./Updoot";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    title!: string;

    @Field()
    @Column()
    description!: string;

    @Field(() => String)
    @Column({ type: 'int', default: 0 })
    points!: number;

    @Field(() => Int, { nullable: true })
    @Column({ name: 'vote_status' })
    voteStatus: number;

    @Field()
    @Column({ name: 'creator_id' })
    creatorId: number;

    @OneToMany(() => Updoot, (updoot)=> updoot.post)
    updoots: Updoot[]

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.posts)
    creator: User;

    @Field(() => Int)
    @Column({ type: 'int', default: 1 })
    status: number;

    @Field(() => String)
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Field()
    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}
