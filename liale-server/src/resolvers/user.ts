import { User } from "../entities/User";
import argon2 from 'argon2';
import { v4 } from 'uuid';
import { Field, Mutation, ObjectType, Resolver, Ctx, Arg, Query, FieldResolver, Root, UseMiddleware, Int } from "type-graphql";
import { UserInput } from "../utils/UserInput";
import { LoginInput } from '../utils/LoginInput';
import { MyContext } from "../types";
import { validateUser } from "../utils/validateUser";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constant";
import { sendEmail } from "../utils/sendEmail";
import { isAuth } from "../middleware/isAuth";

@ObjectType()
class FieldError {
    @Field()
    field: string;

    @Field()
    message: string;
}

@ObjectType()
class UserResponse {
    @Field(() => [ FieldError ], { nullable: true })
    errors?: FieldError[];

    @Field(() => User, { nullable: true })
    user?: User;
}

@Resolver(User)
export class UserResolver {
    @FieldResolver(() => String)
    email(@Root() user: User, @Ctx() ctx: MyContext){
        if(ctx.req.session.userId === user.id) {
            return user.email;
        }

        return "";
    }


    @Mutation(() => UserResponse)
    async changePassword(
        @Arg("token") token: string,
        @Arg("newPassword") newPassword: string,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse>{
        if(newPassword.length <= 4){
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "Please enter the new password."
                    }
                ]
            };
        }

        const key = FORGET_PASSWORD_PREFIX + token;
        const userid = await ctx.redis.get(key);

        if(!userid) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "token is expired!"
                    }
                ]
            };
        }

        const userId = parseInt(userid);
        const user = await User.findOne(userId);

        if(!user) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "user is not longer exists",
                    }
                ]
            };
        }

        User.update({ id : userId }, { password: await argon2.hash(newPassword)});

        await ctx.redis.del(key);
        ctx.req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => Boolean)
    async forgetPassword(
        @Ctx() { redis }: MyContext,
        @Arg("email") email: string
    ){
       const user = await User.findOne({ email });

       if(!user){
        return true;
       }

       const token = v4();
       await redis.set(FORGET_PASSWORD_PREFIX + token, user.id, 'ex', 5000);

       await sendEmail(
           "Forget Password", 
           email,
           `<a href="http://localhost:3000/change-password/${token}">Reset Password</a>`
        );

       return true;
    }

    @Query(() => User, { nullable: true })
    async me(@Ctx() ctx: MyContext){
        console.log(ctx.req.session);
       if(!ctx.req.session.userId){
           return null
       }

       const user = await User.findOne({ id: ctx.req.session.userId});

       return { user };
    }

    @Mutation(() => UserResponse)
    async register(
        @Arg("options", () => UserInput) options: UserInput,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse> {
         try{
            const response = validateUser(options);

            if(response){
               return response;
            }

            const user = await User.findOne({ email: options.email });
            
            if(user){
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Email already exists",
                        }
                    ]
                }
            }

            const hasPassword = await argon2.hash(options.password);

            const result = await User.create({    
                email: options.email,
                password: hasPassword,
                firstname: options.firstname,
                lastname: options.lastname,
                phone: options.phone,
                streetaddress: options.streetaddress,
                streetaddress2: options.streetaddress2,
                city: options.city,
                state: options.state,
                country: options.country
            }).save();

            ctx.req.session.userId = result.id;

            return { user: result};

         }catch(error: any) {
             return {
                 errors: [
                     {
                        field: "username",
                        message: error.message
                     }
                 ]
             };
         }
    }

    @Mutation(() => UserResponse)
    async login(
        @Arg("options", () => LoginInput) options: LoginInput,
        @Ctx() ctx: MyContext
    ): Promise<UserResponse>{
        if(options.email === ''){
            return {
                errors: [
                    {
                        field: "email",
                        message: "Please enter email",
                    }
                ]
            }
        }

        if(options.password === ''){
            return {
                errors: [
                    {
                        field: "password",
                        message: "Please enter the password",
                    }
                ]
            }
        }

        const user = await User.findOne({email: options.email});

        if(!user){
            return {
                errors: [
                    {
                        field: "email",
                        message: "Email is not exists",
                    }
                ]
            }
        }

        const valid = await argon2.verify(user.password, options.password);

        if(!valid){
            return {
                errors: [
                    {
                        field: "password",
                        message: "Invalid Email or password!",
                    }
                ]
            }
        }

        ctx.req.session.userId = user.id;

        return { user };
    }

    @Mutation(() => Boolean)
    logout(@Ctx() {req, res}: MyContext){
        return new Promise((resolve) => {
            req.session.destroy((err) => {
                if(err){
                    resolve(false);
                    return;
                }

                res.clearCookie(COOKIE_NAME);
                resolve(true);
            })
        });
    }

    
    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async changeUserStatus(
        @Arg("status", () => Int) status: number,
        @Arg("id", () => Int) id: number
    ) {
       try{
            await User.update({id},{status})
       }catch(error){
            return false;
       }
    
       return true;
    }
}
