import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import path from 'path';

const generateRandomString = (length: number) => {
   let result = "";
   const charactors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   const charactorsLength = charactors.length;

   for(let i = 0; i < length; i++){
      result += charactors.charAt(Math.floor(Math.random() * charactorsLength));
   }

   return result;
}

@Resolver()
export class UploadResolver {
    @Mutation(()=> String)
    async uploadFile(
        @Arg("file", () => GraphQLUpload) file: FileUpload,
        @Arg("mode", () => String) mode: String
    ): Promise<string>{
        const { createReadStream, filename} = file;
        const {ext} = path.parse(filename);
        const randomName = generateRandomString(12) + ext;

        const pathname = path.join(__dirname, `../../public/upload/${mode}/${randomName}`)

        await new Promise(async (resolve, reject) => {
            createReadStream()
            .pipe(createWriteStream(pathname))
            .on("end", () => resolve("end"))
            .on("close",() => resolve("close"))
            .on("finish", () => resolve("finish"))
            .on("error", () => reject(false));
        });

        return `http://localhost:4000/upload/${mode}/${randomName}`;
    }    
}