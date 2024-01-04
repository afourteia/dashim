import { initTRPC } from '@trpc/server'
import { z } from 'zod'

export const t = initTRPC.create()

export const appRouter = t.router({
  // GET http://localhost:3000/trpc/greeting
  greeting: t.procedure.query(() => 'hello from tRPC v10!'),
  // GET http://localhost:3000/trpc/getUser?input="test"
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input // string
    return { response: 'getUser' }
  }),
  // POST http://localhost:3000/trpc/createUser with body { name: "test" }
  createUser: t.procedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (opts) => {
      // use your ORM of choice
      return { response: 'createUser' }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
