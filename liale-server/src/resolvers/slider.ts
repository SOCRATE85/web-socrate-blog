import { Slider } from "../entities/Slider";
import { Arg, Field, InputType, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class SliderData {
    @Field()
    title!: string;

    @Field()
    images!: string;

    @Field()
    description!: string;

    @Field()
    url!: string;
}

@ObjectType()
class PaginatedSlider {
    @Field(() => [Slider])
    sliders: Slider[];

    @Field()
    hasMore: boolean;
}

@Resolver(Slider)
export class SliderResolver {

    @Query(() => PaginatedSlider)
    async sliders(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => Int, { nullable: true }) cursor: number
    ): Promise<PaginatedSlider> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const sliders = await getConnection()
                            .query(`select p.* from post p ${cursor > 0 ? `where p.id <= ${cursor}` : ""} order by p.created_at DESC limit ${realLimitPlusOne}`);

        return {
            sliders: sliders.slice(0, realLimit),
            hasMore: sliders.length === realLimitPlusOne
        }
    }

    @Query(() => Slider, { nullable: true })
    slider(@Arg("id", () => Int) id: number): Promise<Slider | undefined> {
        return Slider.findOne(id);
    }

    @Mutation(() => Slider)
    @UseMiddleware(isAuth)
    createSlider(
        @Arg("input") input: SliderData
    ): Promise<Slider | undefined> {
        return Slider.create({...input}).save();
    }

    @Mutation(() => Slider)
    @UseMiddleware(isAuth)
    async updateSlider(
         @Arg("id") id: number,
         @Arg("input") input: SliderData
    ): Promise<Slider | undefined> {
        const slider = await getConnection()
        .createQueryBuilder()
        .update(Slider)
        .set({...input})
        .where("id= :id",{id})
        .execute();

        if(slider.raw.changedRows === 1) {
            return Slider.findOne({id});
        }

        throw new Error("something wrong in query");
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deletePost(
        @Arg("id") id: number
    ): Promise<boolean> {
        try{
            await Slider.delete({id});
        }catch(error) {
            return false;
        }
        return true;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async changeSliderStatus(
        @Arg("status", () => Int) status: number,
        @Arg("id", () => Int) id: number
    ) {
       try{
            await Slider.update({id},{status})
       }catch(error){
            return false;
       }
    
       return true;
    }
}
