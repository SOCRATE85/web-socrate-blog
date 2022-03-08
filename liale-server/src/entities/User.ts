import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Post } from "./Post";
import { Updoot } from "./Updoot";

@ObjectType()
@Entity()
export class User extends BaseEntity{
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => String)
  @Column({ unique: true})
  email: string;
  
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  firstname: string;

  @Field(() => String)
  @Column()
  lastname: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String)
  @Column()
  streetaddress: string;

  @Field(() => String)
  @Column()
  streetaddress2: string;

  @Field(() => String)
  @Column()
  city: string

  @Field(() => String)
  @Column()
  state: string

  @Field(() => String)
  @Column()
  country: string
  
  @OneToMany(() => Updoot, (updoot) => updoot.user)
  updoots: Updoot[];

  @OneToMany(() => Post, (post) => post.creator)
  posts: Post[];

  @Field(() => Int)
  @Column({ type: 'int', default: 1 })
  status: number;
  
  @Field(() => String)
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
