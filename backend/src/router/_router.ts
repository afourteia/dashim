import { z } from 'zod'
import { router, publicProcedure } from './_trpc'
import { userRouter } from './user'

export const appRouter = router({
  // GET http://localhost:3000/trpc/greeting
  greeting: publicProcedure.query((opts) => {
    return 'hello from tRPC v10!'
  }),
  user: userRouter, // put procedures under "user" namespace
})

// export type definition of API
export type AppRouter = typeof appRouter
