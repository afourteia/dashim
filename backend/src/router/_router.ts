import { TRPCError, initTRPC } from '@trpc/server'
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'
import { z } from 'zod'
import cookie from 'cookie'

import { userRouter } from './user'

const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure

export const appRouter = router({
  // GET http://localhost:3000/trpc/greeting
  greeting: publicProcedure.query(() => 'hello from tRPC v10!'),
  user: userRouter, // put procedures under "user" namespace
})

// export type definition of API
export type AppRouter = typeof appRouter
