import express from "express";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server-express";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { graphqlUploadExpress } from "graphql-upload";
import { buildSchema } from "type-graphql";
import path from "path";
import cors from "cors";

import { COOKIE_NAME, __prod__ } from "./constant";

//Resolvers
import { UserResolver } from "./resolvers/user";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { CourseResolver } from "./resolvers/course";
import { SliderResolver } from "./resolvers/slider";
import { UploadResolver } from "./resolvers/uploadfile";
import { ApplyforcourseResolver } from "./resolvers/applyforcourse";

//Models
import { Admin } from "./entities/Admin";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { Updoot } from "./entities/Updoot";
import { Course } from "./entities/Course";
import { Slider } from "./entities/Slider";
import { Applyforcourse } from "./entities/Applyforcourse";

const main = async () => {
  const conn = await createConnection({
    type: "mysql",
    database: "kiawitech",
    username: "root",
    password: "",
    logging: false,
    multipleStatements: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    synchronize: true,
    entities: [Admin, User, Post, Updoot, Course, Slider, Applyforcourse],
    port: 3307,
  });

  conn.runMigrations();
  const app = express();
  const RedisStore = connectRedis(session);
  const redis = new Redis();
  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(graphqlUploadExpress({ maxFieldSize: 100000000, maxFiles: 10 }));
  //app.use(cors({origin: "http://localhost:3000", credentials: true }));
  app.use(cors());

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTTL: true,
        disableTouch: true,
      }),
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        secure: __prod__,
        sameSite: "lax",
      },
      secret: "4324324324324324fdhfghdfgdfgdf45456",
      resave: false,
    })
  );

  app.get("/", (_, res) => {
    res.send("Hello");
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        UserResolver,
        PostResolver,
        CourseResolver,
        SliderResolver,
        UploadResolver,
        ApplyforcourseResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: { credentials: true, origin: true },
  });

  app.listen(4000, () => {
    console.log("server is running on port: 4000");
  });
};

main().catch((error) => {
  console.log("Index Error: ", error);
});
