import { router, publicProcedure } from './_router'
import { z } from 'zod'
export const userRouter = router({
  // GET http://localhost:3000/trpc/user.getOne?input="test"
  getOne: publicProcedure.input(z.string()).query((opts) => {
    opts.input // string
    return { response: 'user getOne' }
  }),
  // POST http://localhost:3000/trpc/user.createOne with body { name: "test" }
  createOne: publicProcedure
    .input(z.object({ name: z.string().min(5) }))
    .mutation(async (opts) => {
      // use your ORM of choice
      return { response: 'user createOne' }
    }),
})
