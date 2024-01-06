import { router, publicProcedure } from './_trpc'
import { z } from 'zod'
import { User, type UserType } from '@models/user'
import { TRPCError } from '@trpc/server'
import ServerError from '~/utilities/error'

export const userRouter = router({
  // GET http://localhost:3000/trpc/user.getOne?input="test"
  getMany: publicProcedure.input(z.string()).query(async (opts) => {
    opts.input // string
    try {
      const users = await User.getMany(opts.ctx.req, {})
      return users
    } catch (error) {
      if (error instanceof ServerError) {
        throw new TRPCError({ code: error.code, message: error.message })
      } else {
        throw error
      }
    }
  }),
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
