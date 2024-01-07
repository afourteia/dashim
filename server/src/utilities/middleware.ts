/*
const myFunction = HOF1(HOF2(HOF3(originalFunction)));
Order of calls are
1. HOF3
2. HOF2
3. HOF1
4. originalFunction
*/
import type { Request as ExpressRequest } from 'express'
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
    request: Request | ExpressRequest,
    args: Parameters<T>[1] = {},
    _defaultContext: MiddlewareContext = {
      bypassMiddleware: false,
    }
  ): Promise<ReturnType<T> | null> {
    // console.log('request', request)
    console.log(`Middleware: Entering ${originalMethod.name}`)
    console.log('originalMethod name', originalMethod.name)
    const context = { ...defaultContext, ..._defaultContext }
    // console.log('context is: ', context)
    if (context.bypassMiddleware) {
      console.log('bypassMiddleware is true')
      return await originalMethod(null, args)
    } else {
      console.log('bypassMiddleware is false')
      try {
        const user = await getUserFromDb(request)
        return await originalMethod(user.id, args)
      } catch (error) {
        console.error('**** Error at middleware ****')
        throw error
      }

      // Assuming the userId is the first argument of originalMethod
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
