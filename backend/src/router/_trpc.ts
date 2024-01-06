import * as trpc from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

import cookie from 'cookie'

export async function createContext({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn

  async function test(req: any, res: any) {
    const context = 'hello from context'
    return context
  }

  const context = await test(req, res)
  return {
    req,
    res,
    test: 'hello',
    context,
  }
}
export type Context = Awaited<ReturnType<typeof createContext>>

// const t = trpc.initTRPC.create()
const t = trpc.initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure.use((opts) => {
  // if (!opts.ctx.req || !opts.ctx.res) {
  //   throw new Error('You are missing `req` or `res` in your call.')
  // }
  // console.log('-----------------------------')
  // console.log('opts.ctx.req', opts.ctx.req)
  // console.log('-----------------------------')
  return opts.next({
    ctx: {
      // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
      req: opts.ctx.req,
      res: opts.ctx.res,
    },
  })
})
