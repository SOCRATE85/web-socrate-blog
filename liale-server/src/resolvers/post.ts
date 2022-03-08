import { getConnection } from 'typeorm';
import { 
    Arg, 
    Ctx, 
    Field, 
    FieldResolver, 
    InputType, 
    Int, 
    Mutation, 
    ObjectType, 
    Query, 
    Resolver, 
    Root, 
    UseMiddleware 
} from 'type-graphql';
import { Post } from '../entities/Post';
import { MyContext } from '../types';
import { Updoot } from '../entities/Updoot';
import { User } from '../entities/User';
import { isAuth } from '../middleware/isAuth';

@InputType()
class PostInput {
    @Field()
    title!: string;

    @Field()
    description!: string;
}

@ObjectType()
class PaginatedPosts {
  @Field(() => [Post])
  posts: Post[];

  @Field()
  hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
    @FieldResolver(() => String)
    descriptionSnippet(@Root() root: Post) {
        return root.description.slice(0, 200);
    }

    @FieldResolver(() => User)
    creator(@Root() post: Post, @Ctx() ctx: MyContext) {
        return ctx.userLoader.load(post.creatorId);
    }

    @FieldResolver(() => Int, { nullable: true })
    async voteStatus(@Root() post: Post, @Ctx() ctx: MyContext) {
        if(!ctx.req.session.userId) {
            return null;
        }

        const updoot = await ctx.updootLoader.load({ userId: ctx.req.session.userId, postId: post.id});

        return updoot ? updoot.value: null
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async vote(
        @Arg("postId", () => Int) postId: number,
        @Arg('value', () => Int) value: number,
        @Ctx() ctx: MyContext
    ) {
        const userId = ctx.req.session.userId;
        const isUpdoot = value !== -1;
        const realvalue = isUpdoot ? 1 : -1;

        const updoot = await Updoot.findOne({ where: { postId, userId } });
        const post = await Post.findOne(postId);

        let points: number = 0;

        if(post) {
            points = post.points;
        }

        if(updoot) {
            await getConnection().transaction(async (tm) => {
                await tm.query(`update updoot set value=${realvalue} where post_id=${postId} and user_i=${userId}`);
                await tm.query(`update post set points=${points + realvalue} where id=${postId}`);
            });
        } else if(!updoot) {
            await getConnection().transaction(async(tm)=>{
                tm.query(`insert into updoot(user_id, post_id, value) values(${userId}, ${postId},${value})`);
                tm.query(`update post set ponits = ${points + realvalue} where id=${postId}`);
            })
        }

        return true;
    }

    @Query(() => PaginatedPosts)
    async posts(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => Int, { nullable: true }) cursor: number
    ): Promise<PaginatedPosts> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const posts = await getConnection()
                            .query(`select p.* from post p ${cursor > 0 ? `where p.id <= ${cursor}` : ""} order by p.created_at DESC limit ${realLimitPlusOne}`);

        return {
            posts: posts.slice(0, realLimit),
            hasMore: posts.length === realLimitPlusOne
        }
    }

    @Query(() => Post, { nullable: true })
    post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
        return Post.findOne(id);
    }

    @Mutation(() => Post)
    @UseMiddleware(isAuth)
    createPost(@Arg("input") input : PostInput, @Ctx() ctx: MyContext ): Promise<Post | undefined> {
        return Post.create({...input, creatorId: ctx.req.session.userId}).save();
    }

    @Mutation(() => Post, { nullable: true })
    async updatePost(
        @Arg("id", () => Int) id: number,
        @Arg("title", () => String, { nullable: true }) title: string,
        @Arg("description", () => String, { nullable: true}) description: string,
        @Ctx() ctx: MyContext
    ): Promise<Post | undefined> {
        const post = await getConnection().createQueryBuilder().update(Post).set({title, description}).where("id= :id and creatorId= :creatorId", {
            id,
            creatorId: ctx.req.session.userId
        }).execute();

        if(post.raw.changedRows === 1) {
            return Post.findOne({id, creatorId: ctx.req.session.userId});
        }

        throw new Error("something wrong in query");
    }

    @Mutation(() => Boolean, { nullable: true })
    @UseMiddleware(isAuth)
    async deletePost(
        @Arg("id", () => Int) id: number,
        @Ctx() ctx: MyContext
    ): Promise<boolean> {
        try{
            await Post.delete({ id, creatorId: ctx.req.session.userId});
        }catch(error) {
            return false;
        }

        return true;
    }
    
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async changePostStatus(
        @Arg("status", () => Int) status: number,
        @Arg("id", () => Int) id: number
    ) {
       try{
            await Post.update({id},{status});
       }catch(error){
            return false;
       }
    
       return true;
    }
}