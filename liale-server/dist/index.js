"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const ioredis_1 = __importDefault(require("ioredis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const type_graphql_1 = require("type-graphql");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
//Models
const User_1 = require("./entities/User");
//Resolvers
const user_1 = require("./resolvers/user");
const hello_1 = require("./resolvers/hello");
const constant_1 = require("./constant");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //const conn = 
    yield (0, typeorm_1.createConnection)({
        type: "mysql",
        database: "kiawitech",
        username: "root",
        password: "",
        logging: true,
        multipleStatements: true,
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
        synchronize: true,
        entities: [User_1.User],
        port: 3307
    });
    //conn.runMigrations();
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use((0, cors_1.default)({ credentials: true }));
    app.use((0, express_session_1.default)({
        name: constant_1.COOKIE_NAME,
        store: new RedisStore({
            client: redis,
            disableTTL: true,
            disableTouch: true,
        }),
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            secure: constant_1.__prod__,
            sameSite: "lax",
        },
        secret: "4324324324324324fdhfghdfgdfgdf45456",
        resave: false
    }));
    app.get("/", (_, res) => {
        res.send("Hello");
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield (0, type_graphql_1.buildSchema)({
            resolvers: [hello_1.HelloResolver, user_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req, res, redis
        })
    });
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(4000, () => {
        console.log("server is running on port: 4000");
    });
});
main().catch(error => {
    console.error(error.message);
});
//# sourceMappingURL=index.js.map