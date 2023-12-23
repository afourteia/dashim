/*
const myFunction = HOF1(HOF2(HOF3(originalFunction)));
Order of calls are
1. HOF3
2. HOF2
3. HOF1
4. originalFunction
*/

import { getUserFromDb } from '@server/util/auth.server'

export type MiddlewareContext = {
  bypassMiddleware?: boolean
}

export function middleware<T extends (...args: any[]) => any>(
  originalMethod: T,
  defaultContext: MiddlewareContext = {
    bypassMiddleware: false,
  }
) {
  return async function (
    request: Request,
    args: Parameters<T>[1] = {},
    _defaultContext: MiddlewareContext = {
      bypassMiddleware: false,
    }
  ): Promise<ReturnType<T> | null> {
    console.log('request', request)
    console.log(`Middleware: Entering ${originalMethod.name}`)
    console.log('originalMethod name', originalMethod.name)
    const context = { ...defaultContext, ..._defaultContext }
    console.log('context is: ', context)
    if (context.bypassMiddleware) {
      console.log('bypassMiddleware is true')
      return await originalMethod(args)
    } else {
      console.log('bypassMiddleware is false')
      const userId = await getUserFromDb(request)
      if (!userId) return null

      // Assuming the userId is the first argument of originalMethod
      return await originalMethod(userId, args)
    }
  }
}

export async function log() {
  console.log('log')
  return null
}

export async function validate() {
  console.log('validate')
  return null
}

export async function errorHandler() {
  console.log('errorHandler')
  return null
}

export async function rateLimiter(request: Request) {
  console.log('rateLimiter')
  return null
}
