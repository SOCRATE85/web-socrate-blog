import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { User } from "./User";
import { Post } from "./Post";

@ObjectType()
@Entity()
export class Updoot extends BaseEntity {
    @Field()
    @Column({ type: 'int' })
    value: number;

    @Field()
    @PrimaryColumn({ name: "user_id" })
    userId: number;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.updoots)
    user: User;

    @Field()
    @PrimaryColumn({ name: "post_id"})
    postId: number;

    @Field(() => Post)
    @ManyToOne(() => Post, (post) => post.updoots, {
        onDelete: 'CASCADE'
    })
    post: Post;
}