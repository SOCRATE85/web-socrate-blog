import { Course } from "../entities/Course";
import { Arg, Field, InputType, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../middleware/isAuth";
import { getConnection } from "typeorm";

@InputType()
class CourseInput {
    @Field()
    title: string;

    @Field()
    description: string;

    @Field()
    url: string
}

@Resolver(Course)
export class CourseResolver {
    @Mutation(() => Course)
    @UseMiddleware(isAuth)
    createCourse(
        @Arg("input") input: CourseInput
    ): Promise<Course | undefined> {
        return Course.create({...input}).save();
    }

    @Mutation(() => Course, { nullable: true })
    @UseMiddleware(isAuth)
    async updateCourse(
        @Arg("id") id: number,
        @Arg("input") input: CourseInput
    ): Promise<Course | undefined> {
        const course = await getConnection()
        .createQueryBuilder()
        .update(Course)
        .set({...input})
        .where("id= :id", {id})
        .execute();

        if(course.raw.changedRows === 1) {
            return Course.findOne({id});
        }

        throw new Error("something wrong in query");
    }

    @Mutation(() => Boolean, { nullable: true })
    @UseMiddleware(isAuth)
    async deleteCourse(
        @Arg("id") id: number
    ): Promise<boolean> {
        try{
            await Course.delete({id});
        }catch(error) {
            return false;
        }
        return true;
    }
}
