// import { z } from '@trpc/server';
// import { userRouter } from './user/user.trpc';

// export const appRouter = createRouter().merge('user.', userRouter);
// Merge other routers as needed

import { initTRPC } from '@trpc/server';

console.log('########################################');
console.log('Initialize tRPC router');
console.log('########################################');
const t = initTRPC.create();
export const router = t.router;
const middleware = t.middleware;
export const publicProcedure = t.procedure;

// Export only the type of a router!
// This prevents us from importing server code on the client.
// export type AppRouter = typeof appRouter;
