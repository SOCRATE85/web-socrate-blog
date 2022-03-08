import { isAuth } from "../middleware/isAuth";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Applyforcourse } from "../entities/Applyforcourse";

@InputType()
class InputData {
  @Field()
  firstname!: string;

  @Field()
  lastname!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;

  @Field()
  dateofbirth: Date;

  @Field()
  gender: string;

  @Field()
  street1!: string;

  @Field()
  street2!: string;

  @Field()
  city!: string;

  @Field()
  state!: string;

  @Field()
  country!: string;

  @Field()
  postalcode!: string;

  @Field()
  isreferby: string;

  @Field()
  course: string;

  @Field()
  educationlevel: string;

  @Field()
  areabackground: number;

  @Field()
  areaofspecility!: string;

  @Field()
  doyouemployied!: number;

  @Field()
  referby: string;

  @Field()
  promocode: string;
}

@ObjectType()
class PaginatedApplyforcourse {
  @Field(() => [Applyforcourse])
  applyforcourses: Applyforcourse[];

  @Field()
  hasMore: boolean;
}

@Resolver(Applyforcourse)
export class ApplyforcourseResolver {
  @Query(() => PaginatedApplyforcourse)
  async getApplicationList(
    @Arg("limit", () => Int) limit: number,
    @Arg("cursor", () => Int, { nullable: true }) cursor: number
  ): Promise<PaginatedApplyforcourse> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = realLimit + 1;

    const applyforcourses = await getConnection().query(
      `select p.* from applyforcourse p ${
        cursor > 0 ? `where p.id <= ${cursor}` : ""
      } order by p.created_at DESC limit ${realLimitPlusOne}`
    );

    return {
      applyforcourses: applyforcourses.slice(0, realLimit),
      hasMore: applyforcourses.length === realLimitPlusOne,
    };
  }

  @Query(() => Applyforcourse, { nullable: true })
  getApplication(
    @Arg("id", () => Int) id: number
  ): Promise<Applyforcourse | undefined> {
    return Applyforcourse.findOne(id);
  }

  @Mutation(() => Applyforcourse, { nullable: true })
  createApplication(
    @Arg("input") input: InputData
  ): Promise<Applyforcourse | undefined> {
    return Applyforcourse.create({ ...input }).save();
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteApplication(@Arg("id") id: number): Promise<boolean> {
    try {
      await Applyforcourse.delete({ id });
    } catch (error) {
      return false;
    }
    return true;
  }
}
