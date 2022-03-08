import { UserInput } from "./UserInput";

export const validateUser = (options: UserInput) => {
   if(!options.email.includes('@')) {
     return {
         errors: [
             {
                field: 'email',
                message: 'Not a valid email',
             }
         ]
     }
   }

   return null;
}