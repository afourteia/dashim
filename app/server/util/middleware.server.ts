/*
const myFunction = HOF1(HOF2(HOF3(originalFunction)));
Order of calls are
1. HOF3
2. HOF2
3. HOF1
4. originalFunction
*/

export type MiddlewareContext = {
  bypassMiddleware?: boolean
  bypassCUID?: boolean
}

export function middleware<T extends (...args: any) => any>(
  originalMethod: T,
  request?: Request,
  defaultContext: MiddlewareContext = {
    bypassMiddleware: false,
    bypassCUID: false,
  }
) {
  return async function (
    request: Request,
    args: Parameters<T>[0] = {},
    context: MiddlewareContext = {}
  ) {
    console.log('request', request)
    console.log(`Middleware: Entering ${originalMethod.name}`)
    console.log('originalMethod name', originalMethod.name)
    context = { ...defaultContext, ...context }
    console.log('context is: ', context)
    if (context.bypassMiddleware) {
      console.log('bypassMiddleware is true')
      return await originalMethod(args)
    } else {
      console.log('bypassMiddleware is false')
      const newMethod = await addCUID2(originalMethod)
      return await newMethod(args, context)
    }
  }
}

export async function addCUID2<T extends (...args: any) => any>(
  originalMethod: T,
  defaultContext: MiddlewareContext = {
    bypassMiddleware: false,
    bypassCUID: false,
  }
) {
  return async function (
    args: Parameters<T>[0] = {},
    context: MiddlewareContext = {}
  ) {
    console.log(`CUID2: Entering ${originalMethod.name}`)
    console.log('originalMethod name', originalMethod.name)
    console.log('args is: ', args)
    console.log('args.DeviceToken is: ', args.data?.DeviceToken)

    console.log(`CUID2: Exiting ${originalMethod.name}`)
    return null
    return await originalMethod(args)
  }
}

export async function log<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
) {
  return async function (...args: Parameters<T>) {
    console.log(`LOG: Entering ${originalMethod.name}`)
    const result = await originalMethod(...args)
    console.log(`LOG: Exiting ${originalMethod.name}`)
    return result
  }
}

export async function auth<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
) {
  return async function (...args: Parameters<T>) {
    console.log(`AUTH: Entering ${originalMethod.name}`)
    const result = await originalMethod.apply(this, args)
    console.log(`AUTH: Exiting ${originalMethod.name}`)
    return result
  }
}

export async function validate<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
) {
  return async function (...args: Parameters<T>) {
    console.log(`VALIDATE: Entering ${originalMethod.name}`)
    const result = await originalMethod.apply(this, args)
    console.log(`VALIDATE: Exiting ${originalMethod.name}`)
    return result
  }
}

export async function errorHandler<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
) {
  return async function (...args: Parameters<T>) {
    try {
      return await originalMethod.apply(this, args)
    } catch (error) {
      console.error(`ERROR: ${error.message}`)
      throw error
    }
  }
}

export async function rateLimiter<T extends (...args: Parameters<T>) => any>(
  originalMethod: T
) {
  // Implement rate limiting logic here
  return async function (...args: Parameters<T>) {
    return await originalMethod.apply(this, args)
  }
}
