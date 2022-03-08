import { InputType, Field } from "type-graphql";

@InputType()
export class UserInput{
  @Field()
  email: string;

  @Field()
  password: string;
  
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  phone: string;

  @Field()
  streetaddress: string;

  @Field()
  streetaddress2: string;

  @Field()
  city: string

  @Field()
  state: string

  @Field()
  country: string
}