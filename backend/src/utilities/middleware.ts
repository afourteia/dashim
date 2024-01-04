/*
const myFunction = HOF1(HOF2(HOF3(originalFunction)));
Order of calls are
1. HOF3
2. HOF2
3. HOF1
4. originalFunction
*/
import { getUserFromDb } from '@utilities/auth'

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
      return await originalMethod(null, args)
    } else {
      console.log('bypassMiddleware is false')
      const user = await getUserFromDb(request)
      if (!user) {
        console.log('user is null')
        // throw redirect('/dashboard/login') //TODO: fix redirect
      }

      // Assuming the userId is the first argument of originalMethod
      return await originalMethod(user.id, args)
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
