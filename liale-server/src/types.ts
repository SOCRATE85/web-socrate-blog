import { Response, Request } from "express";
import { Session } from "express-session";
import { Redis } from 'ioredis';
import { createUserLoader } from './utils/createUserLoader';
import { createUpdootLoader } from './utils/createUpdootLoader';

declare global {
    namespace Express {
        interface SessionData {
          [key: string]: any;
        }

        interface Session extends SessionData {
            id: string;
            regenerate(callback: (err: any) => void): void;
            destroy(callback: (err: any) => void): void;
            reload(callback: (err: any) => void): void;
            save(callback: (err: any) => void): void;
            touch(): void;
        }
    }    
}

export type MyContext = {
    req: Request & { session?: Session & { userId?: number } };
    res: Response;
    redis: Redis;
    userLoader: ReturnType<typeof createUserLoader>;
    updootLoader: ReturnType<typeof createUpdootLoader>;
}